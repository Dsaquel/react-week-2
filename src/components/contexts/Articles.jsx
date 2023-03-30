import React from 'react'
import Article from './Article'

const Articles = ({ articles }) => {
  return (
    <div>
      {articles.map((article, i) => (
        <Article article={article} key={i} />
      ))}
    </div>
  )
}

export default Articles
