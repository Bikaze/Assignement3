import React, { useState, useCallback } from 'react'

const MemoizedTodoList = React.memo(({ todos, onToggle }) => {
  console.log("Todo list rendered")
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => onToggle(todo.id)}
          className={`p-2 mb-2 rounded-md shadow-sm cursor-pointer ${todo.completed ? 'bg-gray-300 line-through' : 'bg-yellow-100'}`}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  )
})

const TodoApp = () => {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = useCallback((id) => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }, [])

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Todo List</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add todo"
        className="p-2 border rounded-md mb-4 w-full"
      />
      <button
        onClick={addTodo}
        className="mb-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
      >
        Add
      </button>
      <MemoizedTodoList todos={todos} onToggle={toggleTodo} />
    </div>
  )
}

export default TodoApp