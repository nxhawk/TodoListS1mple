import React, { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
  const [title, setTitle] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const { addTodo } = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault();
    addTodo({
      id: uuidv4(),
      title
    })
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder='Enter a new todo...' onChange={onTitleChange} value={title} required />
      <input type="submit" value="Add" />
    </form>
  )
}

export default TodoForm