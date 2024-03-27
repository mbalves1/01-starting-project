import { it, expect } from 'vitest'

import { validateNotEmpty } from './validation'

it('should throw an error if empty string ios provided as a value', () => {
  const testInput = ''

  const validationFn = () => validateNotEmpty(testInput)

  expect(validationFn).toThrow()
})

it('should throw an error if an empty string is provided as a value', () => {
  const testInput = '  '

  const validationFn = () => validateNotEmpty(testInput)

  expect(validationFn).toThrow()
})

it('should throw an error with provided error message', () => {
  const testInput = ''
  const testErrorMessage = 'Test'

  const validationFn = () => validateNotEmpty(testInput, testErrorMessage)

  expect(validationFn).toThrow(testErrorMessage)
})