import Head from 'next/head'

const ColorPage = () => (
  <article className="color-page">
    <Head>
      <title>{'Color Demo'}</title>
      <link rel="icon" href="favicon.ico" />
    </Head>

    <h1>{'Color Demo (hacked by Andrew)'}</h1>

    <p>
      {'These divs have a'}
      <code>{'[data-pal]'}</code>
      {'attribute to select a palette.'}
    </p>
    <section className="color-demo">
      {['q', 'w', 'e', 'r', 't'].map((shadeIdx, idx) => (
        <div key={shadeIdx} data-pal={shadeIdx}>
          <span>{`fill: --${shadeIdx}-shade`}</span>
          <span>{`text: --${shadeIdx}-text`}</span>
        </div>
      ))}
    </section>

    <p>
      {'These divs have the same'}
      <code>{'data-pal'}</code>
      {'values, and an additional'}
      <code>{'[data-pal-scheme="invert"]'}</code>
      {'to control how the palette is used.'}
    </p>

    <section className="color-demo">
      {['q', 'w', 'e', 'r', 't'].map((shadeIdx, idx) => (
        <div key={shadeIdx} data-pal={shadeIdx} data-pal-scheme="invert">
          <span>{`fill: --${shadeIdx}-text`}</span>
          <span>{`text: --${shadeIdx}-shade`}</span>
        </div>
      ))}
    </section>

    <pre>
      <code className="scss">{`
.color-page {
  > * + * {
    margin-top: var(--s1);
  }

  section.color-demo {
    display: flex;
    justify-content: space-evenly;
    padding-top: var(--s3);
    padding-bottom: var(--s3);
    border: 1px solid black;
    margin-left: var(--s3);
    margin-right: var(--s3);

    > div {
      width: var(--s5);
      height: var(--s5);
      display: flex;
      flex-direction: column;
      place-content: center center;
      text-align: center;
      font-size: large;
    }
  }
}
    `}</code>
    </pre>
    <div></div>
  </article>
)

export default ColorPage
