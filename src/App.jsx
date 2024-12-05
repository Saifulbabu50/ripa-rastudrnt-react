import { useState } from 'react'

import './App.css'
import Header from './Component/Header/Header'
import Beground from './Component/Beground/Beground'
import Cards from './Component/Cards/Cards'
import Cooking from './Component/Cooking/Cooking'

function App() {
  

  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <Header></Header>
        <Beground></Beground>
        <div className='flex justify-between'>
          <div>
            <Cards></Cards>
          </div>
          <div className='max-w-sm bg-slate-600 text-center mx-auto'>
            <Cooking></Cooking>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
