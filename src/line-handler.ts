import { LogInfo } from './log-info'

const DATE_PART = 0
const LEVEL_PART = 1
const ERROR_PART = 2
const SPLIT_MARKER = ' - '
const ERROR_LEVEL = 'error'

export function splitLines (data: string) {
  const lines = data.replace(/\r\n/g, '\n').split('\n')
  const errorLines = []
  for (const line of lines) {
    const logParts = line.split(SPLIT_MARKER)
    if (logParts[LEVEL_PART] !== ERROR_LEVEL) { continue }
    errorLines.push(line)
  }
  return errorLines
}

export function transformErrorLines (lines: string[]) {
  const readyErrorLines = []
  for (const line of lines) {
    const transformedLine = handleLogLine(line)
    readyErrorLines.push(transformedLine)
  }
  return readyErrorLines
}

function handleLogLine (line: string) {
  const parts = line.split(SPLIT_MARKER)
  const date = Date.parse(parts[DATE_PART])
  const logLevel = parts[LEVEL_PART]
  const logMessage: LogInfo = JSON.parse(parts[ERROR_PART])
  return buildLogOutput(date, logLevel, logMessage)
}

function buildLogOutput (timestamp: number, loglevel: string, info: LogInfo) {
  return `{"timestamp": ${timestamp}, "loglevel": ${loglevel}, "transactionId": ${info.transactionId}, "err": ${info.err}}`
}
