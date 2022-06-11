import ErrorMessage from '../components/ErrorMessage'


function Custom404() {
  return <ErrorMessage code={404} />
}

Custom404.Layout = Blogpost

export default Custom404