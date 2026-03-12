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
import { RegistrationForm } from './components/RegistrationForm.jsx'


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [tournaments, setTournaments] = useState(() => getTournamentslocal())
  const [showFilter, setShowFilter] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [selectedSport, setSelectedSport] = useState("All")

  useEffect(()=>{
    setTournamentslocal(tournaments)
  }
  ,[tournaments])


  const filteredTournaments = 
    tournaments.filter(item => {
    const matchesSearch =  item.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSport = tournaments.filter(item => item.sport === selectedSport)

    return matchesSearch && matchesSport
     })


  function handleSubscribe(id, isSubscribing){
    setTournaments( prevTournaments =>
      prevTournaments.map(tournament => tournament.id === id ? {
        ...tournament,
        subscribed: isSubscribing,
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
                      <CardsContainer tournaments={filteredTournaments} onSubscribe={handleSubscribe}/>
                      <Navbar />
                      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
                      {showForm && <RegistrationForm onClose={() => setShowForm(false)}/>}
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
