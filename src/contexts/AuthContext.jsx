import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'

export const AuthPageContext = React.createContext()

const AuthContextProvider = ({ children }) => {
  const [password, setPassword] = useState(null)
  return (
    <AuthPageContext.Provider value={{ password, setPassword }}>
      {children}
    </AuthPageContext.Provider>
  )
}

export const useContextAuth = () => {
  return useContext(AuthPageContext)
}

export default AuthContextProvider
