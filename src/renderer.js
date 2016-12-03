function render (tokens) {
  let result = []
  for (var i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i]

    switch (currentToken.type) {
      case 'inline':
        result.push(renderInline(currentToken.children))
        break
      default:

    }
  }
  return result
}

function renderInline (tokens) {
  for (let i = 0; i < tokens.length; i++) {
    const currentToken = tokens[i]
    let subSection

    switch (currentToken.type) {
      case 'em_open':
        subSection = selectUntilClosingTag(i, 'em_close', tokens)
        return { text: renderInline(subSection.tokens), italics: true }
      case 'strong_open':
        subSection = selectUntilClosingTag(i, 'strong_close', tokens)
        return { text: renderInline(subSection.tokens), bold: true }
      case 'text':
        return currentToken.content
      default:
        return
    }
  }
}

function selectUntilClosingTag (startIndex, closingTag, tokens) {
  let resultTokens = []

  for (let i = startIndex + 1; i < tokens.length; i++) {
    const currentToken = tokens[i]

    if (currentToken.type === closingTag) {
      return {
        tokens: resultTokens,
        jumpToIndex: i + 1
      }
    } else {
      resultTokens.push(currentToken)
    }
  }
}

export default render
