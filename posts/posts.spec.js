import { it, describe, expect, beforeEach } from 'vitest'

import { extractPostData } from './posts.js'

const testTitle = 'Test title'
const testContent = 'Test content'
let testFormData

describe('post tests', () => {
  beforeEach(() => {
    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier]
      }
    }
  })

  it('should extract title and content from provided data', () => {

    const data = extractPostData(testFormData)

    expect(data.title).toBe(testTitle)
    expect(data.content).toBe(testContent)
  })
})