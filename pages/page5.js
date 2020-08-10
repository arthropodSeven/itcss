/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageFive = () => (
  <article className="text-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - Page 5"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <hgroup>
      <h1>Styling Demo</h1>
      <h2>Page 5</h2>
    </hgroup>

    <p>
      On the left is the old default button. On the right is the new default
      button.
    </p>

    <div className="spread">
      <div className="og-styles">
        <button>Button!</button>
      </div>
      <button className="new">Button!</button>
    </div>

    <p>Here's the key thing to remember:</p>

    <p>
      <em>These are the same button.</em> They're both{" "}
      <em>the default button.</em> From the perspective of the user's
      interactions with the site, they're indistinguishable. The only thing that
      changes between the new button and the old button is{" "}
      <em>what it looks like.</em> If we're changing styles, but not changing
      layout or functionality, we should be able to apply the style change
      without rewriting most of the page. But how can we isolate the new styles
      without coming up with a bunch of new classnames?
    </p>

    <p>
      Well, here's one way we could do it in CSS: with the{" "}
      <strong>descendant combinator.</strong>{" "}
    </p>

    <Highlight language="css" style={paraisoDark}>{`
.og-styles button {
  background: white;
  color: black;
  padding: 1.25ex;
  border: 0.3ch solid currentColor;
  // ...
}

.og-styles button.action {
  color: mediumseagreen;
}
.og-styles button.destructive {
  color: lightcoral;
}
.og-styles button.warning {
  color: sandybrown;
}

// in sass, we can use nesting and declare these like: 
// .og-styles {
//    button { ... }
//    button.action { .. }
// }
// but i'm preferring css here on my own prerogative.
    `}</Highlight>

    <p>
      We've taken the previously global element styles and scoped them. Now,
      they only apply to buttons who have at least one parent with the{" "}
      <code>.og-styles</code> class.{" "}
    </p>

    <p>
      This makes updating a whole page to a new style system almost as trivial
      as it can be. The distinctions between the different types of buttons
      haven't changed. In a large project, the same (most often) goes for the
      changes to input fields, image styles, colors, font styles, and so on. If
      we follow this method, here's the sequence of steps we need to follow to
      update our site to the new style system:
    </p>

    <ol>
      <li>Come up with a scope class for the new set of styles.</li>
      <li>Write out the new styles for this milestone.</li>
      <li>For every page on the site:</li>
      <ol>
        <li>Swap out the previous scope class for the new one.</li>
      </ol>
      <li>Done.</li>
    </ol>

    <p>
      Algorithmically, this is an <code>O(n)</code> procedure, where{" "}
      <code>n</code> is the number of pages on the site.
    </p>

    <Link href="page4">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>
    <Link href="page6">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default PageFive
