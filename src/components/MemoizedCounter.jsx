import React, { useState } from 'react'

const StaticItem = React.memo(({ text }) => {
  console.log("Static item rendered:", text)
  return <li className="p-2 bg-green-100 rounded-md shadow-sm mb-2">{text}</li>
})

const MemoizedCounter = () => {
  const [count, setCount] = useState(0)
  const staticItems = ["Item 1", "Item 2", "Item 3"]

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Counter with Static List</h2>
      <button
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setCount(c => c + 1)}
      >
        Count: {count}
      </button>
      <ul>
        {staticItems.map(item => (
          <StaticItem key={item} text={item} />
        ))}
      </ul>
    </div>
  )
}

export default MemoizedCounter