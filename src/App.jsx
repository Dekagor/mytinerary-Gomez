import { useState } from 'react'
import Main from './components/Main/Index'
import Layouts from './layouts/Layouts'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities'
import './App.css'


const router = createBrowserRouter([
  {
    path:'/', 
    element: <Layouts />,
    children:[
      {path:'/', element: <Home /> },
      {path:'/cities', element: <Cities /> }
    ]
  },

])





function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <RouterProvider router={router}>
        <Home />
        <Cities />
      </RouterProvider>

    </div>
  )
}

export default App
