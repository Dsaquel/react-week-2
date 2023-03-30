import React from 'react'
import { useState } from 'react'
export const ContextsPageContext = React.createContext()

const ContextsContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  return (
    <ContextsPageContext.Provider value={{ theme, setTheme }}>
      {children}
    </ContextsPageContext.Provider>
  )
}

export default ContextsContextProvider
