/* eslint-disable no-undef */
import { readFile, writeFile } from '../src/file-helper'

describe('Read File', () => {
  it('should throw an error when called with empty path', () => {
    expect(() => { readFile('') }).toThrowError()
  })

  it('should throw an error when called with incorrect path', () => {
    expect(() => { readFile('./__tests__/input') }).toThrowError()
  })

  it('should get a string when called with a correct path', () => {
    expect(readFile('./__tests__/input.txt')).not.toBeNull()
    expect(readFile('./__tests__/input.txt').length).toBeGreaterThan(0)
  })
})

describe('Write File', () => {
  const lines = ['Lines']

  it('should write a string when called with a correct path', () => {
    expect(() => writeFile(lines, './__tests__/output.txt')).not.toThrowError()
    setTimeout(
      () => { expect(readFile('./__tests__/output.txt')).toBe('[Lines]') }
      , 100)
  })
})
