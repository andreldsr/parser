import { ERROR_LEVEL, LEVEL_PART, SPLIT_MARKER } from './consts'

export function splitLines (data: string) {
  const lines = data.replace(/\r\n/g, '\n').split('\n')
  const errorLines = lines.filter((line) => {
    const logParts = line.split(SPLIT_MARKER)
    return (logParts[LEVEL_PART] === ERROR_LEVEL)
  })
  return errorLines
}
