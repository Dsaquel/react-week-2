import { useState } from 'react'
import { useEffect } from 'react'

const Square = () => {
  const [background, setBackground] = useState('')
  const [height, setHeight] = useState('50px')
  const getRandomColor = () =>
    `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`

  useEffect(() => {
    setBackground(getRandomColor)
  }, [])

  useEffect(() => {
    setHeight(Math.floor(Math.random() * (100 - 50 + 1) + 50))
  }, [background])
  
  return (
    <div
      style={{ width: '50px', height, background: background }}
      onClick={() => setBackground(getRandomColor)}
    />
  )
}

export default Square
