# recsst

Micro CSS reset.

```css
* { box-sizing: border-box }
html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, dl,
dt, dd, blockquote, address { margin: 0; padding: 0 }
```

## Usage

```
npm i recsst
```

```js
const recsst = require('recsst')
recsst.attach()
```

Attaches style tag with the reset to the document head.
