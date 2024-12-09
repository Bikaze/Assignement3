import React, { useState } from 'react'

const ExpensiveComponent = React.memo(({ number }) => {
  // Simulate heavy calculation
  const result = Array(number)
    .fill()
    .reduce((acc) => acc + Math.random(), 0)

  console.log("Expensive component rendered")

  return (
    <div className="p-4 bg-red-100 rounded-md shadow-md">
      Heavy calculation result: {result.toFixed(2)}
    </div>
  )
})

const HeavyCalculation = () => {
  const [number, setNumber] = useState(1000)
  const [toggle, setToggle] = useState(false)

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Heavy Calculation Demo</h2>
      <ExpensiveComponent number={number} />
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => setNumber(n => n + 1000)}
      >
        Increase number
      </button>
      <button
        className="mt-4 ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        onClick={() => setToggle(t => !t)}
      >
        Toggle (won't recalculate): {toggle ? 'ON' : 'OFF'}
      </button>
    </div>
  )
}

export default HeavyCalculation