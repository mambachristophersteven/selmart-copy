import './App.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const Layout = () => {
  return(
    <div className='app'>
      <h1>navbar</h1>
      <Outlet />
      <h1>footer</h1>
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
        element: <h1>home</h1>
      },
      {
        path: "/about",
        element: <h1>about</h1>
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
