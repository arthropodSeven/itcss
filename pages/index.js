import Head from 'next/head'

const Home = (props) => {
  return (
    <article id="home">
      <Head>
        <title>{'Styling Demo - Home'}</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div
        style={{ background: 'black', height: '50vh', marginTop: 'var(--s5)' }}>
        x
      </div>
    </article>
  )
}

export default Home
