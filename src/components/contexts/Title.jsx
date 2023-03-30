import React, { useContext } from 'react'
import { ContextsPageContext } from '../../contexts/ContextsContext'

const Title = ({ title }) => {
  const { theme } = useContext(ContextsPageContext)
  return (
    <h2 style={{ color: theme === 'light' ? 'black' : 'grey' }}>{title}</h2>
  )
}

export default Title
