import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { TournamentCard } from './components/TournamentCard'

function App() {
  return (
    <>    
      <Header/>
      <Searchbar/>
      <TournamentCard/>
    </>
  )
}

export default App
