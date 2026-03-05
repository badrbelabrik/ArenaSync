import { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { CardsContainer} from './components/TournamentCard'
import { tournamentDB } from './data/tournamentDB'
import { BrowserRouter } from 'react-router-dom'

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tournaments, setTournaments] = useState(tournamentDB)
  useEffect(()=>{
    searchTournaments()
  },[searchTerm])

  function searchTournaments(){
      if(searchTerm === ""){setTournaments(tournamentDB); return}
      const filterBySearch = tournamentDB.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      setTournaments(filterBySearch)
          }

  return (
    <>    
      <Header/>
      <Searchbar value={searchTerm} onChange={setSearchTerm}/>
      <CardsContainer tournaments={tournaments}/>
    </>
  )
}

export default App
