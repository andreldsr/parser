import { LogInfo } from '../interfaces/log-info'
import { DATE_PART, ERROR_PART, LEVEL_PART, SPLIT_MARKER } from './consts'

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
