/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageTwo = () => (
  <article
    className="text-page"
    data-layout="standard"
    data-pal-scheme="standard">
    <Head>
      <title>{"Styling Demo - Home"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <hgroup>
      <h1>Styling Demo</h1>
      <h2>Page 2</h2>
    </hgroup>

    <p>
      So, on this very simple imaginary website, we have a lot of element-level
      selectors. Maybe we've been working on it for a few months. Maybe we even
      got really crazy and added buttons!
    </p>

    <div className="spread">
      <button>Button!</button>
    </div>

    <Highlight language="css" style={paraisoDark}>{`
button {
  background: unset; // remove the browser default background

  padding: 1.25ex;

  border: 0.3ch solid black;

  &:hover {
    cursor: pointer;

    background: black;
    color: white;
  }
}
    `}</Highlight>

    <p>
      Most probably, visitors can do more than one type of thing on this
      website, and we want to indicate that to them by applying different styles
      to buttons with different types of actions.
    </p>

    <Link href="index">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>

    <Link href="page2">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default PageTwo
