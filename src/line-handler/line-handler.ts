import { ERROR_LEVEL, LEVEL_PART, SPLIT_MARKER } from './consts'

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
