import { useState } from 'react'
import '../src/index.css'
import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Content_img from './components/Content-img/Content-img'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Header/>
       <Banner/>
       <Content_img />
    </>
  )
}

export default App
