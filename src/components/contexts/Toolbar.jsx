import React from 'react'

const Toolbar = ({ setTheme }) => {
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
