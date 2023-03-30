import React from 'react'
import Article from './Article'

const Articles = ({articles, theme}) => {
  return (
    <div>
        {
            articles.map((article, i) => (
                <Article article={article} key={i} theme={theme} />
            ))
        }
    </div>
  )
}

export default Articles
