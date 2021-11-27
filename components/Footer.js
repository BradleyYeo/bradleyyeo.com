export default function Footer() {
  const links = [
    {
      title: 'Source',
      url: '',
      icon: 'ri-braces-line'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/BradleyYeo',
      icon: 'ri-github-line'
    },
    {
      title: 'linkedin',
      url: 'https://www.linkedin.com/in/bradleyyeokian',
      icon: 'ri-linkedin-line'
    }
  ]

  return <footer className="footer">
    {links.map((link, index) => {
      return <a key={index} href={link.url} target="_blank">
        <span>{link.title}</span>
        <i className={link.icon} />
      </a>
    })}
  </footer>
}