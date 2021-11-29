import { writeFile } from '../file-helper'
import { splitLines, transformErrorLines } from '../line-handler'
import { outputPath } from '../path-helper'

export function handleData (data) {
  const errorLines = splitLines(data)
  const readyErrorLines = transformErrorLines(errorLines)
  writeFile(readyErrorLines, outputPath)
}
