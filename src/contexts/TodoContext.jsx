import React, { createContext, useState } from 'react'

export const TodoContext = createContext()
//{}[]
const TodoContextProvider = ({ children }) => {
  //State
  const [todos, setTodos] = useState([
    { id: 1, title: 'Viec 1' },
    { id: 2, title: 'Viec 2' },
    { id: 3, title: 'Viec 3' }
  ])
  //Function
  const addTodo = todo => {
    setTodos([...todos, todo])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  //context Data
  const todoContextData = {
    todos,
    addTodo,
    deleteTodo
  }

  //Return Provider
  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider