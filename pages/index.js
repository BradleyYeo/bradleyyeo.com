import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export async function getStaticProps() {
  return {
    props: {
      title: 'Bradley Yeo',
      description: 'Singapore Management University (SMU)',
      image: '/static/images/home-bw.jpg',
    },
  }
}

function Home(props) {
  const { title, description, image } = props

  return (
    <div className="wrapper">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://bradleyyeo.com" property="og:url" />
        <meta content={`https://bradleyyeo.com${image}`} property="og:image" />
      </Head>

      <Navbar />
      <main className="post main home">
        <div className="post-content">
          <div className="post-container">
            <div className="single">
              <h1>{title}</h1>
              <p><strong>Information Systems (Smart-City Management)</strong>.<br/>
              {description}.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home
