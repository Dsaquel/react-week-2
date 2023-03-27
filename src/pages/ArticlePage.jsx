import { useState } from 'react'
import Articles from '../components/articles/Articles'
import FormPost from '../components/articles/FormPost'

const ArticlePage = () => {
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

export default ArticlePage
