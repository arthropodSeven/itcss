// import hljs from 'highlight.js/lib/core'
// import javascript from 'highlight.js/lib/languages/javascript'
// import css from 'highlight.js/lib/languages/css'
// import scss from 'highlight.js/lib/languages/scss'

import 'normalize.css'
// this is the best one.
// import 'highlight.js/styles/pojoaque.css'
//
// also pretty dece
// import 'highlight.js/styles/hopscotch.css'
// import 'highlight.js/styles/lioshi.css'
import 'highlight.js/styles/pojoaque.css'
// import 'react-syntax-highlighter/dist/esm/styles/hljs/pojoaque'

import 'typeface-berkshire-swash'
import 'typeface-cooper-hewitt'
import 'typeface-vt323'
import 'typeface-libre-franklin'
import 'victormono'
import 'styles/core.scss'
import 'styles/globals.scss'
import 'styles/layouts.scss'

// hljs.registerLanguage('javascript', javascript)
// hljs.registerLanguage('css', css)
// hljs.registerLanguage('scss', scss)

function MyApp(props) {
  const { Component, pageProps } = props

  return <Component {...pageProps} />
}

export default MyApp
