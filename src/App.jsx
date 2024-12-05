import { useState } from 'react'

import './App.css'
import Header from './Component/Header/Header'
import Beground from './Component/Beground/Beground'

function App() {
  

  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <Header></Header>
        <Beground></Beground>
      </div>
    </>
  )
}

export default App
