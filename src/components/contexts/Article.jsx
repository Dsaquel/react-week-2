import React from 'react'
import Content from './Content'
import Title from './Title'

const Article = ({ article }) => {
  return (
    <div>
      <Title title={article.title} />
      <Content content={article.content} />
    </div>
  )
}

export default Article
