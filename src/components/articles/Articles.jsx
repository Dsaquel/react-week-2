import Article from './Article'

const Articles = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return <Article item={item} key={i} />
      })}
    </div>
  )
}

export default Articles
