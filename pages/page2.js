/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageTwo = () => (
  <article className="text-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - Page 2"}</title>
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

    <div className="spread" data-pal-scheme="unset">
      <button>Button!</button>
    </div>

    <Highlight language="css" style={paraisoDark}>
      {`
button {
  background: white;
  color: black;
  padding: 1.25ex;
  // currentColor- literally "the value of this element's \`color\` property"
  border: 0.3ch solid currentColor;
}

button:hover,
button:focus {
  transform: scale(1.03);
}
button:hover {
  cursor: pointer;

  border-style: double;
}
button:focus {
  outline: 0.5ch solid lightgrey;
}
button:active {
  transform: unset;
}
    `}
    </Highlight>

    <p>
      Most probably, visitors can do more than one type of thing on this
      website, and we want to indicate that to them by applying different styles
      to buttons with different types of actions.
    </p>

    <p>
      This presents us with a new problem: our buttons are no longer{" "}
      <em>indistinguishable</em>. We now have different types of buttons with
      different styling needs.
    </p>

    <p>
      Thankfully, this is what <strong>class-level selectors</strong> are for!
      Or, rather, this is what they were originally developed for. That's why
      they're called "classes" in the first place: They're used to{" "}
      <em>classify</em> an element, i.e., to make it <em>distinguishable</em>{" "}
      from other elements of the same type.
    </p>

    <div className="spread">
      <button>Normal button!</button>
      <button className="action">Helpful button!</button>
      <button className="destructive">Destructive button!</button>
      <button className="warning">Warning button!</button>
    </div>

    <Highlight language="css" style={paraisoDark}>
      {`
button.action {
  color: mediumseagreen;
}

button.destructive {
  color: lightcoral;
}

button.warning {
  color: sandybrown;
}
    `}
    </Highlight>

    <p>
      Now let's get into the good stuff. We're going to introduce the villains
      of this story:
    </p>

    <p className="evil">Product managers.</p>

    <Link href="index">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>

    <Link href="page3">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default PageTwo
