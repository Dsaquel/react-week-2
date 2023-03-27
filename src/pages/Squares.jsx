import { useState } from 'react'
import Square from '../components/square/Square'

const Squares = () => {
  const [squareNumber, setSquareNumber] = useState(6)

  const getRandomNumber = () => Math.floor(Math.random() * (10 - 5 + 1) + 5)

  return (
    <div>
      <h1>square</h1>
      <div>
        {[...Array(squareNumber)].map((e, i) => {
          return <Square key={i} />
        })}
      </div>
      <button onClick={() => setSquareNumber(getRandomNumber)}>click</button>
    </div>
  )
}

export default Squares
