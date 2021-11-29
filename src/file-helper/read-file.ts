import * as fs from 'fs'

export function readFile (inputPath: string) {
  return fs.readFileSync(inputPath, 'utf-8')
}
