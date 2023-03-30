import React from 'react'
import { useContext } from 'react'
import { ContextsPageContext } from '../../contexts/ContextsContext'

const Toolbar = () => {
  const { setTheme } = useContext(ContextsPageContext)

  return (
    <div>
      <button
        onClick={() =>
          setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
        }
      >
        Theme
      </button>
    </div>
  )
}

export default Toolbar
