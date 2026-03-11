import { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { CardsContainer} from './components/TournamentCard'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {TournamentDetails} from "./components/TournamentDetails";
import {FilterPopup} from "./components/FilterPopup.jsx";
import { getTournamentslocal, setTournamentslocal} from './data/storage.js'


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tournaments, setTournaments] = useState(getTournamentslocal())
  const [showFilter, setShowFilter] = useState(false)
  const [selectedSport, setSelectedSport] = useState("All")

  useEffect(()=>{
    setTournamentslocal(tournaments)
  }
  ,[tournaments])

  useEffect(()=>{
    let filtered = [];
      if(searchTerm !== ""){
        filtered = getTournamentslocal().filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setTournaments(filtered)
      }
      if(selectedSport !== "All"){
        filtered = getTournamentslocal().filter(item => item.sport === selectedSport)
        setTournaments(filtered)
      }
  },[searchTerm,selectedSport])

  function handleSubscribe(id, isSubscribing){
    setTournaments( prevTournaments =>
      prevTournaments.map(tournament => tournament.id === id ? {
        ...tournament,
        participantsCount: {
          ...tournament.participantsCount,
          current: isSubscribing ? tournament.participantsCount.current + 1
                                 : tournament.participantsCount.current - 1 
        }
      } : tournament)
    )
  }

  return (
    <>
      <BrowserRouter>
          <Routes>
              {/*Home Page*/}
              <Route path="/" element={
                  <>
                      <Header/>
                      <Searchbar value={searchTerm} onChange={setSearchTerm} onFilterClick={()=>setShowFilter(true)}/>
                      <CardsContainer tournaments={tournaments} onSubscribe={handleSubscribe}/>
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
