import React from 'react'
import Articles from '../components/contexts/Articles'
import Toolbar from '../components/contexts/Toolbar'
import ContextsContextProvider from '../contexts/ContextsContext'

const articles = [
  {
    title: 'Super article',
    content: 'Un super article bien ecris',
  },
  {
    title: 'Autre article',
    content: 'Un autre article mal ecris',
  },
  {
    title: 'Test article',
    content: "Un test d'article bien ecris",
  },
]

const Contexts = () => {
  return (
    <ContextsContextProvider>
      <div>
        <h1>Contexts</h1>

        <Toolbar />
        <Articles articles={articles} />
      </div>
    </ContextsContextProvider>
  )
}

export default Contexts
