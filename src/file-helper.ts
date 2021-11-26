import * as fs from 'fs'

export function readFile (inputPath: string) {
  return fs.readFileSync(inputPath, 'utf-8')
}

export function writeFile (data: string[], outputPath: string) {
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
