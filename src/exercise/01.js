// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function countReducer(state, action) {
  switch (action.type) {
    case 'increment': {
      return state + action.step
    }
    default: {
      throw Error('Unnknown action: ' + action.type)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [count, dispatch] = React.useReducer(countReducer, initialCount)

  const increment = () =>
    dispatch({
      type: 'increment',
      count: count,
      step: step,
    })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
