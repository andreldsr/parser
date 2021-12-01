import { INPUT_ARG, OUTPUT_ARG } from './conts'

let inputPath = ''
let outputPath = ''

export function getPath () {
  const args = process.argv.slice(2)
  const inputIndex = args.indexOf(INPUT_ARG)
  const outputIndex = args.indexOf(OUTPUT_ARG)
  if (inputIndex > -1 && args.length > inputIndex + 1) {
    inputPath = args[inputIndex + 1]
  }
  if (outputIndex > -1 && args.length > outputIndex + 1) {
    outputPath = args[outputIndex + 1]
  }
  checkPaths()
}

function checkPaths () {
  if (inputPath.length === 0 || outputPath.length === 0) { throw Error('input or output path is null') }
}

export function getInputPath () {
  return inputPath
}

export function getOutputPath () {
  return outputPath
}

export function clearPaths () {
  inputPath = ''
  outputPath = ''
}
