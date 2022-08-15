import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { TodoContext } from '../contexts/TodoContext'
import Todo from './Todo'
import TodoForm from './TodoForm'
//{}[]
const Todos = () => {
  const { todos } = useContext(TodoContext)
  //load auth context
  const { isAuthenticated } = useContext(AuthContext)
  return (
    <div className='todo-list'>
      <TodoForm />
      {
        isAuthenticated ? (
          <ul>
            {//
              todos.map((todo) => (
                <Todo todo={todo} key={todo.id} />
              ))
            }
          </ul>
        ) : <p style={{ textAlign: 'center' }}>Not authorised</p>
      }

    </div>
  )
}

export default Todos