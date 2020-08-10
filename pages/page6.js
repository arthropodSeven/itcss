/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageSix = () => (
  <article className="text-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - Page 6"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <hgroup>
      <h1>Styling Demo</h1>
      <h2>Page 6 - TL;DR</h2>
    </hgroup>

    <h3>The Current Strategy</h3>

    <p>
      Up to now, our strategy for handling milestone style changes has boiled
      down to:
    </p>

    <ol>
      <li>Create a new component that has the new styles.</li>
      <li>
        Where we need the new styles, use the new version of the component.
      </li>
    </ol>

    <p>I make the case that this is inefficient for two reasons.</p>

    <p>
      First: To replace one version of the styles with the next version for any
      given component, we need to first create a new component, then publish it
      so that we can use it on the website, and then update the component{" "}
      <strong>everywhere it appears.</strong> This implies that for every
      component, we have to update every instance of that component which needs
      to be changed.
    </p>

    <p>
      Second: every milestone has style changes, and many milestones have style
      changes for every component on the site. With this strategy, every time we
      need to update the styles for most of the site, we need to replace every
      component on the site. This means that the amount of effort required to do
      milestone style updates correlates <strong>linearly</strong> with the size
      of the website.
    </p>

    <h3>An Alternative Strategy</h3>

    <p>
      Suppose we have a <code>{"<Control>"}</code> component that was created
      originally during milestone A. Milestone B is coming next, and we need to
      update the styles for the <code>{"<Control>"}</code>. Under the current
      system, we effectively consider these components as <em>distinct:</em>{" "}
      <code>{"<ControlA>"}</code> and <code>{"<ControlB>"}</code>, each with the
      styles for its milestone.
    </p>

    <p>
      An alternative approach would consider both styled versions of the{" "}
      <code>{"<Control>"}</code> component as one component. Styling the
      component for a new milestone would then mean, not creating a new version
      of the component, but only creating a new version of its styles.
    </p>

    <p>
      I propose that we accomplish this by{" "}
      <strong>
        using the same selectors for each component, no matter the milestone,
      </strong>{" "}
      and{" "}
      <strong>
        scoping the styles for each version under a parent class for the
        milestone.
      </strong>
    </p>

    <p>As an example, instead of this:</p>

    <Highlight language="scss" style={paraisoDark}>{`
button.BEURO__btn {
  &--green {
    background: $BEURO_green;
  }
  // ...
}
    `}</Highlight>

    <p>Prefer this:</p>

    <Highlight language="scss" style={paraisoDark}>{`
// milestone BEURO
.ms__BEURO {
  button.green {
    background: $BEURO_green;
  }
  //...
}
    `}</Highlight>

    <Link href="page5">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>

    <Link href="/">
      <a className="right">
        <h2>Page 1</h2>
      </a>
    </Link>
  </article>
)

export default PageSix
