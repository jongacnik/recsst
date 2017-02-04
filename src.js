const fs = require('fs')

const reset = fs.readFileSync(__dirname + '/recsst.css', 'utf8')

exports.toString = () => reset

exports.attach = () => {
  let node = document.createElement('style')
  node.innerHTML = reset
  document.head.appendChild(node)
}
