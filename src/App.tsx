import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme/original.ts'
import Home from './Home.tsx'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
