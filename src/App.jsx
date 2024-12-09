import React from 'react'
import ParentChildDemo from './components/ParentChildDemo'
import MemoizedCounter from './components/MemoizedCounter'
import HeavyCalculation from './components/HeavyCalculation'
import TodoApp from './components/TodoApp'
import LiveTime from './components/LiveTime'

const App = () => {
  return (
    <div>
      <ParentChildDemo />
      <MemoizedCounter />
      <HeavyCalculation />
      <TodoApp />
      <LiveTime />
    </div>
  )
}

export default App