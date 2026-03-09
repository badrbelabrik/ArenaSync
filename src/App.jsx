import { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { CardsContainer} from './components/TournamentCard'
import { tournamentDB } from './data/tournamentDB'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {TournamentDetails} from "./components/TournamentDetails";
import {FilterPopup} from "./components/FilterPopup.jsx";


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tournaments, setTournaments] = useState(tournamentDB)
  const [showFilter, setShowFilter] = useState(false)
  const [selectedSport, setSelectedSport] = useState("All");
  useEffect(()=>{
      if(searchTerm === ""){setTournaments(tournamentDB); return}
      const filtered = tournamentDB.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      if(selectedSport !== "All"){
          filtered = filtered.filter(item => item.sport === selectedSport)
      }
      setTournaments(filtered)
  },[searchTerm,selectedSport])


  return (
    <>
      <BrowserRouter>
          <Routes>
              {/*Home Page*/}
              <Route path="/" element={
                  <>
                      <Header/>
                      <Searchbar value={searchTerm} onChange={setSearchTerm} onFilterClick={()=>setShowFilter(true)}/>
                      <CardsContainer tournaments={tournaments}/>
                      <Navbar />
                      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
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
