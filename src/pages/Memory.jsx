import { useState } from 'react'
import MemoryCard from '../components/memory/MemoryCard'
import MemoryContextProvider from '../contexts/MemoryContext'
import { getRandomString, shuffleArray } from '../tools/function'
import { useEffect } from 'react'

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
    <MemoryContextProvider>
      <div>
        {cards &&
          cards.map((card, i) => (
            <div key={i}>
              <MemoryCard cards={cards} card={card} />
            </div>
          ))}
      </div>
    </MemoryContextProvider>
  )
}

export default Memory
