import React from 'react'
import HobbyItem from './HobbyItem'

const ParentHobbies = () => {
  const hobbies = ['Reading', 'Gaming', 'Hiking']
  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">My Hobbies</h2>
      <ul className="list-disc list-inside space-y-1">
        {hobbies.map((h) => (
          <HobbyItem key={h} hobby={h} />
        ))}
      </ul>
    </div>
  )
}

export default ParentHobbies