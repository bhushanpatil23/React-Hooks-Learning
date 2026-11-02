import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import LearnUseReducer from './1_useReducer/learnUseReducer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LearnUseReducer />
    </>
  )
}

export default App
