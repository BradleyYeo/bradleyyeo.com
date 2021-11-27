import React from 'react'
import Head from 'next/head'
import Main from '../layouts/Main'
import items from "../data/about";
import {format, intervalToDuration, parseISO} from "date-fns";

export async function getStaticProps() {
  const meta = {
    title: 'Resume // Bradley Yeo',
    description: 'My Resume',
    tagline: 'Bradley Yeo Kian',
    image: '/static/images/reminder-bw.jpg',
    gradientColor: 'cyan-green',
    selectionColor: 'green',
  }

  return { props: meta }
}


function Reminder(props) {
  const { title, description, image } = props
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
  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date()
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    }
    else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <div className="single">
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://zenorocha.com/reminder" property="og:url" />
        <meta content={`https://zenorocha.com${image}`} property="og:image" />
      </Head>

      <p className="manifesto"><strong>Time is the most important asset.</strong> Time does not equal money. <strong>Time equals life.</strong> And you only have one chance to make it right. <strong>Every human being is fighting a battle inside themselves.</strong> It’s your <strong>obligation to help</strong> and inspire them. Regardless of what you do, you can always inspire others to do good. Nobody is better than you. <strong>And you’re not better than anybody else.</strong> Be humble. Being in the <strong>comfort zone is wonderful</strong>, but nothing ever grows there. Keep studying. <strong>Keep creating.</strong> Haters will come if you have the <strong>audacity to build something new</strong>. Don’t let them define you. <strong>Don’t let them stop you.</strong> Just block them and keep going. Don’t expect <strong>others to make you happy</strong>. You are the only one <strong>responsible for your happiness</strong>. Don’t wait until friday to enjoy life. Joy should be present in everything you do. <strong>Be kind to your parents</strong>. They gave up many things for you. Having hundreds of <strong>people admiring you</strong> is worthless, if you’re not admired by your own family. Don’t fear the unknown. Fear knowing everything. <strong>Life is too damn short</strong> and every day counts. <strong>Do what you wanna do</strong> and do it now.  Tick-tock don't stop. Tick-tock don't wait.</p>
      <p className="manifesto"><em>- by Zeno & Carol</em></p>
      <h2>Experience</h2>
      {renderAll()}
    </div>
  )
}



Reminder.Layout = Main

export default Reminder