import { handleData } from './data-handler'
import { readFile } from './file-helper'
import { getInputPath, getPath } from './path-helper'

function execute () {
  getPath()
  handleData(readFile(getInputPath()))
}

execute()
