import { readFile, writeFile } from './file-helper'
import { splitLines, transformErrorLines } from './line-handler'
import { getPaths, inputPath, outputPath } from './path-helper'

getPaths()
handleData(readFile(inputPath))

function handleData (data) {
  const errorLines = splitLines(data)
  const readyErrorLines = transformErrorLines(errorLines)
  writeFile(readyErrorLines, outputPath)
}
