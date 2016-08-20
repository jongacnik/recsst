# recsst

Micro CSS reset.

```css
html { box-sizing: border-box }
*, *:before, *:after { box-sizing: inherit }
html, body, h1, h2, h3, h4, h5, h6, p, ol, ul, li, dl,
dt, dd, blockquote, address { margin: 0; padding: 0 }
```

## Usage

```
npm i recsst
```

### CSS

```html
<link rel="stylesheet" href="recsst.css">
```

### JS

```js
const recsst = require('recsst')
recsst.attach()
```

Attaches style tag with the reset to the document head.
