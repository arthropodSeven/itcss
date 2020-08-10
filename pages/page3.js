/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageThree = () => (
  <article className="text-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - Page 3"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <hgroup>
      <h1>Styling Demo</h1>
      <h2>Page 3</h2>
    </hgroup>

    <p>
      Alright, so this is the part where someone else comes along and ruins
      everything by making it more complicated.
    </p>

    <p>
      The developers are happy and content with their simple website that serves
      a few people a day. It's easy to make sense of, for both the developers
      and the users. We have elements, we have classes that assign additional
      styles to particular subsets of those elements, we have pseudoselectors
      that let us style their behavior under speical circumstances, and all is
      right with the world.
    </p>

    <p>And then someone walks into the room...</p>

    <p className="pm">
      Hey guys, hope everyone's having a nice day. We're moving forward with the
      next version of the website and we need to change all the styles for
      everything. We're also adding a proper color scheme. This shouldn't be
      hard{"\u2014"}I'll have more for you next week.
    </p>

    <p className="stage">[A beat passes.]</p>

    <p className="evil">Fuck.</p>

    <p>It could've been so simple.</p>

    <p>
      Well, we aren't about to lose our jobs, so I suppose we'd better get to
      it. Here's the list of changes our <em>product manager</em> told us we
      need to make:
    </p>

    <Highlight language="markdown" style={paraisoDark}>
      {`
1. The buttons need to have rounded corners. It's more modern.
2. Get rid of the borders on the buttons. 
3. Normal buttons should have a \`plum\` background.
4. Helpful buttons should have a \`darkturquoise\` background. 
5. Destructive buttons should have a \`firebrick\` background.
6. Warning buttons should have a \`hotpink\` background.
7. All buttons should have white text.
8. The hover and focus styles should make the buttons a little bigger and reduce the opacity to 85%.
9. The active style should make the button slightly darker.
    `}
    </Highlight>

    <p className="stage">
      [The racing of a heartbeat fills the soundstage as the DEVELOPERS scan the
      list.]
    </p>

    <p>Okay. Let's look at our options. </p>

    <Link href="page2">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>

    <Link href="page4">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default PageThree
