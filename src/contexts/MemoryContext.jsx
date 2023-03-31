import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const MemoryPageContext = React.createContext()

const MemoryContextProvider = ({ children }) => {
  const [idsFound, setIdsFound] = useState([])
  const [identifierWaiting, setIdentifierWaiting] = useState(null)
  const [identifiersTimer, setIdentifiersTimer] = useState(null)

  useEffect(() => {
    if (!identifiersTimer) return
    setTimeout(() => {
      setIdentifiersTimer(null)
    }, 2000)
  }, [identifiersTimer])

  return (
    <MemoryPageContext.Provider
      value={{
        idsFound,
        setIdsFound,
        identifierWaiting,
        setIdentifierWaiting,
        identifiersTimer,
        setIdentifiersTimer,
      }}
    >
      {children}
    </MemoryPageContext.Provider>
  )
}

export const useContextMemory = () => {
  return useContext(MemoryPageContext)
}

export default MemoryContextProvider
