import Head from 'next/head'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import { getAllPosts } from '../lib/blog'
import ListItem from '../components/ListItem'
import FeaturedArticle from '../components/FeaturedArticle'
import { AnimateSharedLayout } from 'framer-motion'

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'date',
    'skip',
    'slug',
    'title',
    'image',
    'content',
    'description',
  ])

  return {
    props: {
      title: 'Articles // Bradley Yeo',
      tagline: 'Stories. Guides.',
      image: '/static/images/articles-bw.jpg',
      gradientColor: 'yellow-pink',
      selectionColor: 'orange',
      allPosts,
    },
  }
}

function Articles(props) {
  const renderFeatured = () => {
    const featured = [
      'Useful lessons learnt in 2021',
      'Economics of Google Cloud'
    ]

    return props.allPosts
      .filter(item => featured.includes(item.slug))
      .map((post, index) => {
        return <FeaturedArticle
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          description={post.description}
          image={post.image}
          stats={post.stats}
          content={post.content}
        />
      })
  }

  const renderAll = () => {
    return props.allPosts.map((post, index) => {
      if (!post.skip) {
        return <ListItem
          key={index}
          index={index}
          href={`/${post.slug}/`}
          title={post.title}
          date={post.date}
        />
      }
    })
  }

  const { title, image } = props
  const description = `Here you can find all the <strong>${props.allPosts.length} articles</strong> I wrote.`

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://bradleyyeo.com/projects/" property="og:url" />
        <meta content={`https://bradleyyeo.com${image}`} property="og:image" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />

        <h2>Featured Articles</h2>
        <div className="featured-articles">
          {renderFeatured()}
        </div>

        <h2>All Articles</h2>
        <ul className="article-list">
          {renderAll()}
        </ul>
      </AnimateSharedLayout>
    </div>
  )
}

Articles.Layout = Main

export default Articles