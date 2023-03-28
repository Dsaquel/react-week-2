import { useEffect } from 'react'
import { useState } from 'react'

const Request = () => {
  const [imgUrl, setImgUrl] = useState()

  const init = async () => {
    const data = await (await fetch('https://random.dog/woof.json')).json()
    setImgUrl(data.url)
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <div>
      <h1>requete</h1>
      <img src={imgUrl} style={{ maxWidth: '500px', maxHeight: '400px' }} />
      <button onClick={init}>Changer d'image</button>
    </div>
  )
}

export default Request
