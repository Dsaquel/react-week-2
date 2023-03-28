import Car from './Car'

const CarsList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => (
        <Car item={item} key={i} />
      ))}
    </div>
  )
}

export default CarsList
