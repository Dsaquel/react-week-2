import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
export const ContextsPageContext = React.createContext()

const ContextsContextProvider = ({ value, children }) => {
  const [textSize, setTextSize] = useState()

  return (
    <ContextsPageContext.Provider value={{ ...value, textSize, setTextSize }}>
      {children}
    </ContextsPageContext.Provider>
  )
}

export const useContextPage = () => {
  return useContext(ContextsPageContext)
}

export default ContextsContextProvider
