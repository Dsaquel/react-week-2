import { useState } from 'react'
import { useEffect } from 'react'
import { getRandomNumber } from '../../tools/function'
const Square = () => {
  const [background, setBackground] = useState('')
  const [height, setHeight] = useState('50px')
  const getRandomColor = () =>
    `rgb(${[1, 2, 3].map((x) => (Math.random() * 256) | 0)})`

  useEffect(() => {
    setBackground(getRandomColor)
  }, [])

  useEffect(() => {
    setHeight(getRandomNumber(50, 100))
  }, [background])

  return (
    <div
      style={{ width: '50px', height, background: background }}
      onClick={() => setBackground(getRandomColor)}
    />
  )
}

export default Square
