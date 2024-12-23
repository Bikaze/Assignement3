import React, { useState } from 'react'

const MultiCheckboxForm = () => {
  const options = ['Option A', 'Option B', 'Option C']
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
    <form onSubmit={handleSubmit}>
      {options.map(option => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
            />
            {option}
          </label>
        </div>
      ))}
      <button type="submit">Submit</button>
      <p>Selected: {selected.join(', ')}</p>
    </form>
  )
}

export default MultiCheckboxForm