const INPUT_ARG = '--input'
const OUTPUT_ARG = '--output'

export let inputPath = ''
export let outputPath = ''

export function getPaths () {
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
