
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { appRoutes } from './router/router'
import {Container} from './components/Container'
import './App.css'

function App() {

  const router = createBrowserRouter(appRoutes)


  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
