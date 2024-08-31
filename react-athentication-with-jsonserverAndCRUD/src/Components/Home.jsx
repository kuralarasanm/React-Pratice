import React from 'react'
import Navbar from './Navbar'
import CRUD from './CRUD'
import TypingTest from './TypingTest'

const Home = () => {
  return (
    <div>
        <Navbar />    
        Home
        <CRUD/>
        <TypingTest/>
    </div>
  )
}

export default Home