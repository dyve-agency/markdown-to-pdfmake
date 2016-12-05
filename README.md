# Markdown to PDFmake.js

This library takes a markdown string and translates it into the structure required by the [PDFmake.js](http://pdfmake.org/) library.

An example:
```
const markdownToPdfmake = require('markdown-to-pdfmake');
markdownToPdfmake('**This is bold text**') === [{ text: 'This is bold text', bold: true }]
```
