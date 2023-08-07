import { useState } from 'react'
import Main from './components/Main/Index'
import Layouts from './layouts/Layouts'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Layouts>

        <Main />

      </Layouts>





    </>
  )
}

export default App
