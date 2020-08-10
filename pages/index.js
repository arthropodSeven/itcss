/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const Home = () => (
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
      <h2>Page 1</h2>
    </hgroup>

    <p>Alright, here's the deal.</p>

    <p>
      Right now we have about a thousand different components throughout the
      codebase. As far as their styles are concerned, most are members of a
      group which share a great deal of features.
    </p>

    <p>For example:</p>

    <p>
      These <code>{"<p>"}</code> tags are all indistinguishable. They have
      identical styles. Generally, this is true for the vast majority of
      paragraphs on any given page on any given website.
    </p>

    <p>
      In fact, it was even more true when CSS was originally developed{"\u2014"}
      when most pages on the internet looked a lot like this one. That's why the
      earliest versions of CSS started with{" "}
      <strong>element-level selectors</strong>, like these.
    </p>

    <Highlight language="css" style={paraisoDark}>{`
// a selector that matches any <p> tag
p {
  font-family: 'Libre Franklin';
}

// a selector that matches any <hgroup>, <h1>, <h2>, etc.
hgroup,
h1,
h2,
h3,
h4 {
  font-family: 'Playfair Display';
}
    `}</Highlight>

    <p>
      Element selectors are powerful precisely because they can match any
      element of a particular type. With two or three lines of CSS, you can
      change the appearance of everything on a page.
    </p>

    <p>
      And, perhaps equally important, the change you've made will be{" "}
      <em>consistent:</em> you don't need to remember, every time you want to
      write a paragraph, that the font for that element is Libre Franklin. You
      can just write a <code>{"<p>"}</code>, and you get the rest for free.
    </p>

    <Link href="page2">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default Home
