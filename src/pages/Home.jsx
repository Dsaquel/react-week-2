import { useState } from 'react'
import Articles from '../articles/Articles'
import FormPost from '../articles/FormPost'

const Home = () => {
  const [articles, setArticles] = useState([
    { title: 'premier article', content: '...' },
  ])
  return (
    <div>
      <FormPost setResult={setArticles} />
      <Articles items={articles} />
    </div>
  )
}

export default Home
