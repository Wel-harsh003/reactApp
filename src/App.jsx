import React from 'react'

const App = () => {
  return (
    <div>
      <h1>React app</h1>
      <form action="submit">
        <input type="text" placeholder='Enter your name'/>
        <input type="number" placeholder='Enter your age'/>
        <input type="number" placeholder='Enter your phone'/>
        <input type="date" placeholder='Enter your DOB'/>
        <button>Click</button>
      </form>
    </div>
  )
}

export default App
