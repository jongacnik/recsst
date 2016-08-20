const reset = `
  * { box-sizing: border-box }
  html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, dl,
  dt, dd, blockquote, address {
    margin: 0;
    padding: 0;
  }
`

exports.attach = () => {
  let node = document.createElement('style')
  node.innerHTML = reset
  document.head.appendChild(node)
}
