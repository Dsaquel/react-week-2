import { useEffect } from 'react'
import { useState } from 'react'

const Article = ({ item, deleteItem, index }) => {
  const [color, setColor] = useState('white')
  useEffect(() => {
    console.log('to')
  }, [])
  return (
    <li
      onClick={() => setColor(color === 'white' ? 'green' : 'red')}
      style={{ background: color }}
    >
      {item} - <button onClick={() => deleteItem(index)}>x</button>
    </li>
  )
}

export default Article
