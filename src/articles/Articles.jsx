import Article from './Article'

const Articles = ({ items }) => {
  console.log(items)
  return (
    <div>
      {items.map((item, i) => {
        return <Article item={item} key={i} />
      })}
    </div>
  )
}

export default Articles
