import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'

const Layout = () => {
  return(
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />
      }
    ]
  }
  
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App
