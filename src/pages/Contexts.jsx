import React, { useState } from 'react'
import Articles from '../components/contexts/Articles'
import Toolbar from '../components/contexts/Toolbar'

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

export const ContextsPageContext = React.createContext()

const Contexts = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ContextsPageContext.Provider value={{ theme, setTheme }}>
      <div>
        <h1>Contexts</h1>

        <Toolbar />
        <Articles articles={articles} />
      </div>
    </ContextsPageContext.Provider>
  )
}

export default Contexts
