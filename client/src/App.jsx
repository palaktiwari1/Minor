import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import google from "../New folder/Google-Symbol.png"
import yahoo from "../New folder/Yahoo.png"
import Card2 from './components/Card2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
    <Header></Header>
   
    <Card title="Google" src={google}></Card>
    <Card title="Yahoo" src={yahoo}></Card>
    <Card title="Meta"></Card>
    <Card title="Unstop" des="lorem"></Card>
    <Card2></Card2>
    <Footer></Footer>
      </>
  )
}

export default App
