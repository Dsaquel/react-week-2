import { useState } from 'react'
import './MemoryCard.css'
import { useContextMemory } from '../../contexts/MemoryContext'

const MemoryCard = ({ card, cards }) => {
  const {
    idsFound,
    identifierWaiting,
    setIdentifierWaiting,
    setIdsFound,
    identifiersTimer,
    setIdentifiersTimer,
  } = useContextMemory()
  const [isCardShow, setIsCardShow] = useState(false)

  const showCard = () => {
    if (idsFound.includes(card.id) || identifiersTimer) return

    setIsCardShow(true)

    if (identifierWaiting) {
      const searchCard = searchCardByIdentifier(card.identifier)
      if (searchCard.id === card.id) {
        setIdsFound((rest) => [...rest, card.id])
        setIdentifierWaiting(null)
      }
      setIdentifiersTimer([identifierWaiting, card.identifier])
      setIsCardShow(false)
      return
    } else {
      setIdentifierWaiting(card.identifier)
      handleTimeEnd(2000)
    }
  }

  const searchCardByIdentifier = () => {
    if (identifierWaiting) {
      return cards.find((card) => card.identifier === identifierWaiting)
    }
    return null
  }

  const handleTimeEnd = (timer) => {
    setTimeout(() => {
      setIsCardShow(false)
      setIdentifierWaiting(null)
    }, timer)
  }

  return (
    <div className="card" onClick={showCard}>
      {isCardShow ||
      idsFound.includes(card.id) ||
      (identifiersTimer && identifiersTimer.includes(card.identifier)) ? (
        <div>{card.content}</div>
      ) : (
        <span>X {card.id}</span>
      )}
    </div>
  )
}

export default MemoryCard
