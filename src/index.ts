import { handleData } from './data-handler'
import { readFile } from './file-helper'
import { getPath, inputPath } from './path-helper'

function execute () {
  getPath()
  handleData(readFile(inputPath))
}

execute()
