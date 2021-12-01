/* eslint-disable no-undef */
import { clearPaths, getInputPath, getOutputPath, getPath } from '../../src/path-helper'
describe('Path helper without output', () => {
  it('should set error when input not set', () => {
    process.argv.push('--output')
    process.argv.push('outputPath')
    expect(() => getPath()).toThrowError()
  })
  it('should set error when output not set', () => {
    process.argv.push('--input')
    process.argv.push('inputPath')
    expect(() => getPath()).toThrowError()
  })

  it('should get input and output path correctly', () => {
    process.argv.push('--input')
    process.argv.push('inputPath')
    process.argv.push('--output')
    process.argv.push('outputPath')
    getPath()
    expect(getInputPath()).toStrictEqual('inputPath')
    expect(getOutputPath()).toStrictEqual('outputPath')
  })

  afterEach(() => {
    process.argv.pop()
    process.argv.pop()
    clearPaths()
  })
})
