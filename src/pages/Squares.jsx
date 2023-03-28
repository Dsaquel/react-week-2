import { useState } from 'react'
import Square from '../components/square/Square'
import { getRandomNumber } from '../tools/function'

const Squares = () => {
  const [squareNumber, setSquareNumber] = useState(6)

  return (
    <div>
      <h1>square</h1>
      <div>
        {[...Array(squareNumber)].map((e, i) => {
          return <Square key={i} />
        })}
      </div>
      <button onClick={() => setSquareNumber(getRandomNumber(5, 10))}>
        click
      </button>
    </div>
  )
}

export default Squares
