import React from 'react'
import Head from 'next/head'
import Main from '../layouts/Main'
import items from '../data/resume'
import { renderExperience } from './about'

export async function getStaticProps() {
  const meta = {
    title: 'Resume // Bradley Yeo',
    description: 'I am proficient in AWS, Python, Java, Javascript, HTML, CSS.',
    tagline: 'Bradley Yeo Kian',
    image: '/static/images/reminder-bw.jpg',
    gradientColor: 'cyan-green',
    selectionColor: 'green',
  }

  return {props: meta}
}

function Resume(props) {
  const {title, description, image} = props

  const renderEducation = () => {
    return items.map((item, index) => {
      return <div style={{marginBottom: 20}} key={index}>
        <h3>{item.schoolName}</h3>
        <p>{item.major}</p>
        <p>{item.duration}</p>
        <p>{item.coursework}</p>
      </div>
    })
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title"/>
        <meta content={description} name="description"/>
        <meta content={description} property="og:description"/>
        <meta content="https://bradleyyeo.com/resume" property="og:url"/>
        <meta content={`https://bradleyyeo.com${image}`} property="og:image"/>
      </Head>

      <p className="manifesto">I am proficient in <strong>AWS, Python, Java, Javascript, HTML, CSS.</strong></p>
      <section>
        <h2>Skills</h2>
        <h3>Languages</h3>
        <p>Python (Pandas, NumPy, scikit-learn), SQL, HTML, CSS, Java, Javascript</p>
        <h3>Libraries, Frameworks, Tools</h3>
        <p>AWS, Git, GitHub, Bash, MongoDB, Vim, React, Node.js, Linux</p>
      </section>

      <h2>Education</h2>
      {renderEducation()}
      <h2>Experience</h2>
      {renderExperience()}
      <h2>Certification</h2>
      <p>AWS Certified IT Solution Architect Associate</p>
      <p>AWS Certified Cloud Practitioner</p>
      <a download className="btn-transparent btn-primary" role="button"
         href="/static/resume_pdf/Bradley_Yeo_Resume.pdf">
        <i className="ri-download-2-line"/> Download Resume
      </a>
    </div>
  )
}

Resume.Layout = Main

export default Resume