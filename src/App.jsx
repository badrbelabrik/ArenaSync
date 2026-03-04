import { useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { CardsContainer} from './components/TournamentCard'
import { tournamentDB } from './data/tournamentDB'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  // const filteredTournaments = tournamentDB.filter(...)
  return (
    <>    
      <Header/>
      <Searchbar value={searchTerm} onChange={setSearchTerm}/>
      <CardsContainer tournaments={tournamentDB}/>
    </>
  )
}

export default App
