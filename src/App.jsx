import { useState } from 'react'
import './App.css'
import Section1 from './assets/Components/Home/Section1'
import Layout from './assets/Components/Layout'
import FirstPage from './assets/Components/Home'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FirstPage />
    </>
  )
}

export default App
