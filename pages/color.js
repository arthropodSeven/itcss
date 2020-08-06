import Head from 'next/head'

const ColorPage = () => (
  <article className="color-page">
    <Head>
      <title>{'Color Demo'}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <h1>{'Color Demo (hacked by Andrew)'}</h1>

    <section className="color-demo">
      {new Array(5).fill(null).map((_, idx) => (
        <div key={`color-demo-${idx}`} />
      ))}
    </section>

    <pre>
      <code className="scss">{`
$shaderefs: [ 'q' 1, 'w' 2, 'e' 3, 'r' 4, 't' 5, ];

.color-page {
  pre {
    width: 100%;

    code {
      margin: var(--s2) var(--s1);
    }
  }

  section.color-demo {
    display: flex;

    justify-content: space-evenly;

    padding-top: var(--s3);
    padding-bottom: var(--s3);

    & > div {
      width: var(--s4);
      height: var(--s4);

      content: ' ';

      @each $ref, $index in $shaderefs {
        &:nth-child(#{$index}) {
          background: var(--#{$ref}-shade);
        }
      }
    }
  }
}
    `}</code>
    </pre>
    <div></div>
  </article>
)

export default ColorPage
