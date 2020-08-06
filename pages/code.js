import Head from 'next/head'

const CodePage = () => (
  <article className="code-page">
    <Head>
      <title>{'Code (Hacked By Andrew)'}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div>
      <h1 style={{ marginBottom: '2em' }}>{'Hacked By Andrew'}</h1>
    </div>

    <pre>
      <code className="css">{`
hgroup, h1, h2, h3, h4, *.heading {
  font-family: 'Berkshire Swash';
}

h2, h3, h4 {
  font-weight: lighter;
}

code, pre, samp {
  font-family: 'VT323';
  font-size: 1.62rem;
}
    `}</code>
    </pre>
  </article>
)

export default CodePage
