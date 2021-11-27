import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Main from '../layouts/Main'
import stripHtml from '../lib/strip-html'
import items from '../data/about'

export async function getStaticProps() {
  const meta = {
    title: 'About // Bradley Yeo',
    description: "<strong>Hi, I'm Bradley.</strong><p>I'm currently an <strong>Information Systems (Smart-City Management)</strong> undergraduate at Singapore Management University with a strong interest in <strong>cloud computing</strong>. Before that, I was a Business Administration student in Singapore Polytechnic. </p><p><strong>I love automation</strong>, AWS, and learning about DevOps. When I'm not working, I like running, reading, and <strong>travelling</strong>.</p>",
    tagline: 'AWS. GCP. Linux.',
    image: '/static/images/about-bw.jpg',
    gradientColor: 'pink-purple',
    selectionColor: 'pink'
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const bio = "Bradley Yeo is a Singaporean creator and programmer. He currently is currently an Information Systems (Smart-City Management) undergraduate at Singapore Management University. He learns about AWS for fun and likes to learn about automation to optimise every part of his workflow. Before studying in SMU, Bradley learnt about Business and Maritime Law in Singapore Polytechnic."

  const renderIntro = () => {
    return <div className="about">
      <div className="about-section">
        <Image
          alt="Bradley"
          src="/static/images/bradley-bw.jpg"
          width="336"
          height="336"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
          priority
        />
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: description }}
        className="about-section"
      />
    </div>
  }

  const renderBio = () => {
    return <div>
      <p>This is made for journalists, podcast hosts, and event organizers to copy-and-paste.</p>
      <blockquote><p>{bio}</p></blockquote>
      <p>
        <button className="btn-transparent btn-primary" onClick={copyBio}>
          <i className="ri-file-copy-line" /> Copy to Clipboard
        </button>
        <span style={{ margin: '0 20px 0 10px' }}>•</span>
        <a download className="btn-transparent btn-primary" role="button" href="/static/images/bradley-bw.jpg">
          <i className="ri-download-2-line" /> Download Headshot
        </a>
      </p>
    </div>
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return <div style={{ marginBottom: 40 }} key={index}>
        <h3>{item.jobTitle}</h3>
        <p style={{ margin: 0 }}>
          <a href={item.companyUrl} target="_blank">{item.company}</a>
          <span> • {item.location}</span>
        </p>
        <p style={{ margin: 0 }}>
          <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
          <span> – </span>
          <span>{item.endDate ? format(parseISO(item.endDate), 'LLL yyyy') : 'Present'}</span>
          <span> • </span>
          <span>{getDuration(item.startDate, item.endDate)}</span>
        </p>
      </div>
    })
  }



  const copyBio = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(bio)
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={stripHtml(description)} name="description" />
        <meta content={stripHtml(description)} property="og:description" />
        <meta content="https://bradleyyeo.com/About" property="og:url" />
        <meta content={`https://bradleyyeo.com${image}`} property="og:image" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <h2>Experience</h2>
      {renderAll()}
    </div>
  )
}

About.Layout = Main

export default About