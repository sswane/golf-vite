import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/original.ts'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AllHoles from './holes/AllHoles.tsx'
import Home from './Home.tsx'
import Hole from './holes/Hole.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Home />} />
      <Route path='holes' element={<AllHoles />} />
      <Route path='holes/:number' element={<Hole />} />
    </Route>
  )
)

function App() {

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
