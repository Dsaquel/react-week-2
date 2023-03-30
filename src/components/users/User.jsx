// {
//   id: string
//   title: string
//   firstName: string
//   lastName: string
//   picture: string
//}

const User = ({ item }) => {
  return (
    <div>
      <img src={item.picture} />
      <div>{item.firstName}</div>
      <div>{item.lastName}</div>
    </div>
  )
}

export default User
