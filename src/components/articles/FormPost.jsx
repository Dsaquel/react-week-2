import { useState } from 'react'

const FormPost = ({ setResult }) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult((rest) => [...rest, { title, content }])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">ajouter l'article</button>
    </form>
  )
}

export default FormPost
