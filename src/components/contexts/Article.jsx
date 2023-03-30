import React from 'react'
import Content from './Content'
import Title from './Title'

const Article = ({ article, theme }) => {
  return (
    <div>
      <Title title={article.title} theme={theme} />
      <Content content={article.content} />
    </div>
  )
}

export default Article
