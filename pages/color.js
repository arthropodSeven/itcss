import Head from 'next/head'

const ColorPage = () => (
  <article className="color-page">
    <Head>
      <title>{'Color Demo'}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <section className="color-demo">
      {new Array(5).fill(null).map(() => (
        <div />
      ))}
    </section>

    <pre>
      <code className="scss">{`
$shaderefs: 'q' 'w' 'e' 'r' 't';

section.color-demo {
  > div {
    width: var(--s3);
    height: var(--s3);

    @each $ref, $index in shaderefs {
      &:nth-of-type($index) {
        background: var(--#{$ref}-shade);
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
