import MarkdownIt from 'markdown-it'
import render from './renderer'

function markdownToPdfmake (markdownString) {
  const md = new MarkdownIt()
  const tokens = md.parse(markdownString, {})
  return render(tokens)
}

export default markdownToPdfmake
