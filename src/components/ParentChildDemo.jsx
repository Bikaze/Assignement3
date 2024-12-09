import React, { useState } from 'react'

// Memoized child component
const ChildComponent = React.memo(({ message }) => {
  console.log("Child component rendered")
  return <div className="p-4 bg-blue-100 rounded-md shadow-md">{message}</div>
})

const ParentChildDemo = () => {
  const [message, setMessage] = useState("Hello from parent!")
  const [count, setCount] = useState(0)

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Parent-Child Demo</h2>
      <ChildComponent message={message} />
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => setCount(c => c + 1)}
      >
        Click me (won't re-render child): {count}
      </button>
    </div>
  )
}

export default ParentChildDemo