import * as fs from 'fs'
const DATE_PART = 0
const LEVEL_PART = 1
const ERROR_PART = 2
const ERROR_LEVEL = 'error'
const SPLIT_MARKER = ' - '

const INPUT_ARG = '--input'
const OUTPUT_ARG = '--output'

let inputPath = ''
let outputPath = ''

const args = process.argv.slice(2)
function getPaths (args: string[]) {
  const inputIndex = args.indexOf(INPUT_ARG)
  const outputIndex = args.indexOf(OUTPUT_ARG)
  if (inputIndex > -1 && args.length > inputIndex + 1) {
    inputPath = args[inputIndex + 1]
  }
  if (outputIndex > -1 && args.length > outputIndex + 1) {
    outputPath = args[outputIndex + 1]
  }
}
function checkPaths () {
  if (inputPath.length === 0 || outputPath.length === 0) { throw Error('input or output path is null') }
}

getPaths(args)
checkPaths()

interface LogInfo{
    transactionId: string;
    details: string;
    code: number;
    err: string;
}

fs.readFile(inputPath, 'utf-8', (err, data) => {
  if (err) {
    handleError(err)
    return
  }
  handleData(data)
})

function handleError (err) {
  console.log(err)
}

function handleData (data) {
  const errorLines = splitLines(data)
  const readyErrorLines = transformErrorLines(errorLines)
  writeFile(readyErrorLines)
}

function splitLines (data: string) {
  const lines = data.replace(/\r\n/g, '\n').split('\n')
  const errorLines = []
  for (const line of lines) {
    const logParts = line.split(SPLIT_MARKER)
    if (logParts[LEVEL_PART] !== ERROR_LEVEL) { continue }
    errorLines.push(line)
  }
  return errorLines
}

function transformErrorLines (lines: string[]) {
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

function writeFile (data: string[]) {
  let lines = '['
  data.forEach((log, index) => {
    lines = lines.concat(log)
    if (index < data.length - 1) { lines = lines.concat('\n') }
  })
  lines = lines.concat(']')
  fs.writeFile(outputPath, lines, err => {
    if (err) {
      console.error(err)
    }
  })
}
