import { useState } from 'react'
import Login from "../src/pages/login/Login"
import Signup from "../src/pages/signup/Signup"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='p-4 h-screen flex items-center justify-center'>
      {/* <Login /> */}
      <Signup />
     </div>
    </>
  )
}

export default App
