import { useState } from 'react'

const FormTodo = ({ addTodo }) => {
  const [inputTodo, setInputTodo] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(inputTodo)
    setInputTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
      <button type="submit">ajouter</button>
    </form>
  )
}

export default FormTodo
