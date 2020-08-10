/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head"
import Link from "next/link"
import Highlight from "react-syntax-highlighter"
import paraisoDark from "react-syntax-highlighter/dist/cjs/styles/hljs/dark"

const PageFour = () => (
  <article className="text-page" data-layout="standard">
    <Head>
      <title>{"Styling Demo - Page 4"}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>
    <hgroup>
      <h1>Styling Demo</h1>
      <h2>Page 4</h2>
    </hgroup>
    <p>Here's that list again:</p>
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
    <p>
      So far, we've used element selectors, class selectors, and a few
      pseudoselectors. Which one of these is a good fit for updating the button
      styles so our PM doesn't fire us?
    </p>
    <p>
      Well, clearly pseudoselectors are right out. They're too niche for what
      we're doing.
    </p>
    <p>
      Element selectors will probably be necessary, since we are still styling
      elements, after all. But they're not sufficient on their own{"\u2014"}if
      we just used element selectors, we'd be styling all the buttons again.
      Moreover, since we're likely not going to update all the buttons at once
      (what are we, superheroes?), if we just used element selectors we'd likely
      end up leaving the site in a state where some buttons are using the new
      styles and some are using the old ones.
    </p>
    <p>
      This leaves us with one option. we need to distinguish the new buttons
      from the old buttons, and we've already established that class selectors
      are the way to do that. So we need a whole new set of classes that
      correspond to the new buttons.
    </p>
    <Highlight language="css" style={paraisoDark}>{`
button.new { ... }
button.new__action { ... }
button.new__destructive { ... }
button.new__warning { ... }
    `}</Highlight>
    <p>Right?</p>
    <p>
      Well, that's certainly one way that we could go about it. We'd write a set
      of classes for the new button styles, and then set about applying them to
      all the buttons all over the site. It'll take a while, but when it's done
      it'll be done. But there's this tricky thing about antagonists{"\u2014"}
    </p>
    <p className="evil">They always come back.</p>

    <p>
      What happens next time our PM ruins everything? If we follow this
      strategy, every time we need to come up with a new set of buttons, we have
      to update{" "}
      <strong>
        <em>every button on the site!</em>
      </strong>{" "}
      Here's the sequence of steps we need to follow when we use this strategy:
    </p>

    <ol>
      <li>
        Come up with the new classes we're going to use for the new versions of
        updated elements.
      </li>
      <li>Write the new styles under the new classes.</li>
      <li>
        For every page that needs to be updated:
        <ol>
          <li>
            For every button on the page:
            <ol>
              <li>Update the button to use the new classes.</li>
            </ol>
          </li>
        </ol>
      </li>
      <li>Done.</li>
    </ol>

    <p>
      To put it in algorithmic terms, this is an <code>O(n * m)</code> procedure
      for updating button styles, where <code>n</code> is the number of pages on
      the site, and <code>m</code> is the number of buttons on any given page.
      And what if we have more than just buttons? What if the PM asks us to
      update all the form inputs, all the images, all the paragraph styles, all
      the headings, all the...
    </p>

    <p className="stage">
      [The READERS sigh as the author finally gets to the point.]
    </p>

    <p>On the next page I propose an alternative strategy.</p>

    <Link href="page3">
      <a className="left">
        <h2>Back</h2>
      </a>
    </Link>
    <Link href="page5">
      <a className="right">
        <h2>Next</h2>
      </a>
    </Link>
  </article>
)

export default PageFour
