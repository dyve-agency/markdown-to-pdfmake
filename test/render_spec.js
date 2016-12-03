import { expect } from 'chai'
import MarkdownIt from 'markdown-it'
import render from '../src/renderer'

const md = new MarkdownIt()

describe('render', () => {
  it('should always return an array', () => {
    const result = render([])
    expect(result).to.eql([])
  })
  
  describe('Inline renderer', () => {
    describe('Emphasis', () => {
      it('should return an array with one text element which is italic', () => {
        const text = '*This is italic text*'
        const tokens = md.parseInline(text, {})
        const result = render(tokens)
        expect(result).to.eql([{ text: 'This is italic text', italics: true }])
      })
    })

    describe('Strong', () => {
      it('should return an array with one text element which is bold', () => {
        const text = '**This is bold text**'
        const tokens = md.parseInline(text, {})
        const result = render(tokens)
        expect(result).to.eql([{ text: 'This is bold text', bold: true }])
      })
    })
  })
})
