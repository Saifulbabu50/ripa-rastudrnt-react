

import './App.css'
import Header from './Component/Header/Header'

import Cards from './Component/Cards/Cards'
import Cooking from './Component/Cooking/Cooking'
import Bannar from './Component/Beground/Bannar'
import { useState } from 'react'

function App() {
  const[cooking, setCooking]=useState([])
  const handleAddToCooking = card =>{
    const newCooking =[...cooking, card]
    setCooking(newCooking)
  }

  return (
    <>
      <div className=' max-w-7xl mx-auto'>
        <Header></Header>
        <Bannar></Bannar>
        <div className='flex '>
          <div className=''>
            <Cards handleAddToCooking={handleAddToCooking}></Cards>
          </div>
          <div className='max-w-sm  mx-auto'>
            <Cooking cooking={cooking}></Cooking>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

