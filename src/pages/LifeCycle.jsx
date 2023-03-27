import { useState } from 'react'
import FormTodo from '../components/lifecycle/FormTodo'
import Todo from '../components/lifecycle/Todo'

const Lifecycle = () => {
  const [todos, setTodos] = useState([])
  const addTodos = (todo) => setTodos([...todos, todo])
  return (
    <div>
      <h1>cycle de vie</h1>
      <FormTodo addTodo={addTodos} />
      <ul>
        {todos.map((todo, i) => (
          <Todo key={i} item={todo} />
        ))}
      </ul>
    </div>
  )
}

export default Lifecycle
