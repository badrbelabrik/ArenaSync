import { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { CardsContainer} from './components/TournamentCard'
import { tournamentDB } from './data/tournamentDB'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Tabsystem} from "./components/TabSystem";
import {TournamentDetails} from "./components/TournamentDetails";

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
      <BrowserRouter>
          <Routes>
              {/*Home Page*/}
              <Route path="/" element={
                  <>
                      <Header/>
                      <Searchbar value={searchTerm} onChange={setSearchTerm}/>
                      <CardsContainer tournaments={tournaments}/>
                      <Navbar />
                  </>
              }/>
              {/*Tournament Page*/}
              <Route path="/tournament/:id" element={
                  <>
                    <TournamentDetails />
                    <Navbar />
                  </>
              }/>

          </Routes>
            </BrowserRouter>
    </>
    
  )
}

export default App
