import { useEffect } from 'react'
import { useState } from 'react'
import { getRandomString, shuffleArray } from '../tools/function'
import MemoryCard from '../components/memory/MemoryCard'
import MemoryContextProvider from '../contexts/MemoryContext'

const Memory = () => {
  const [cards, setCards] = useState()

  useEffect(() => {
    const cardsOutput = []
    const contents = ['blabla', 'lol', 'mdr', 'toto', 'salut', 'jaiFaim']
    const contentsLength = contents.length

    const createCards = () => {
      for (let i = 0; i < contentsLength; i++) {
        const content = contents.shift()
        cardsOutput.push(
          {
            id: i,
            content,
            identifier: getRandomString(),
          },
          { id: i, content, identifier: getRandomString() }
        )
      }
      shuffleArray(cardsOutput)
      setCards(cardsOutput)
    }

    createCards()
  }, [])
  return (
    <MemoryContextProvider value={{ cards }}>
      <div>
        {cards &&
          cards.map((card, i) => (
            <div key={i}>
              <MemoryCard card={card} />
            </div>
          ))}
      </div>
    </MemoryContextProvider>
  )
}

export default Memory
