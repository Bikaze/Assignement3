import React, { useState, useEffect } from 'react'

// Memoized static header component
const StaticHeader = React.memo(() => {
  console.log("Static header rendered")
  return <h2 className="text-2xl font-bold">Live Time</h2>
})

const LiveTime = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 bg-white rounded-md shadow-lg">
      <StaticHeader />
      <div className="text-xl mt-2">{time.toLocaleTimeString()}</div>
    </div>
  )
}

export default LiveTime