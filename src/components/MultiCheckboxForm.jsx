import React, { useState } from 'react'

const MultiCheckboxForm = () => {
  const options = ['liverpool ', 'arsenal', 'APR ','lakers','Man City','FC Barcelona']
  const [selected, setSelected] = useState([])

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(o => o !== option))
    } else {
      setSelected([...selected, option])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Selected:', selected)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4">
      {options.map(option => (
        <div key={option} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => toggleOption(option)}
            className="h-4 w-4"
          />
          <label className="text-gray-700">{option}</label>
        </div>
      ))}
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
      <p>Selected: {selected.join(', ')}</p>
    </form>
  )
}

export default MultiCheckboxForm