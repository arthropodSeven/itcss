import { useCallback, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'

import 'normalize.css'
// this is the best one.
// import 'highlight.js/styles/pojoaque.css'
//
// also pretty dece
// import 'highlight.js/styles/hopscotch.css'
// import 'highlight.js/styles/lioshi.css'
import 'highlight.js/styles/pojoaque.css'

import 'typeface-berkshire-swash'
import 'typeface-cooper-hewitt'
import 'typeface-vt323'
import 'typeface-libre-franklin'
import 'styles/globals.css'
import 'styles/layouts.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('scss', scss)

const highlightCallback = () => {
  const nodes = document.querySelectorAll('pre>code')
  nodes.forEach(hljs.highlightBlock)
}

function MyApp(props) {
  const { Component, pageProps } = props

  const router = useRouter()

  useEffect(() => {
    highlightCallback()
    router.events.on('routeChangeComplete', highlightCallback)
    router.events.on('hashChangeComplete', highlightCallback)

    return () => {
      router.events.off('routeChangeComplete', highlightCallback)
      router.events.off('hashChangeComplete', highlightCallback)
    }
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
