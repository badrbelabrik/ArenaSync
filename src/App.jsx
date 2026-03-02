import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'

function App() {
  return (
    <>    
      <Header/>
      <Searchbar/>
    </>

  )
}

export default App
