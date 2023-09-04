import { useState } from 'react'
import Layouts from './layouts/Layouts'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import Details from './pages/Details';
import './App.css'


const router = createBrowserRouter([
  {
    path:'/',  element: <Layouts />,
    children:[
      {path:'/', element: <Home /> },
      {path:'/cities', element: <Cities /> },
      {path:'/city/:id', element: <Details /> }
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
