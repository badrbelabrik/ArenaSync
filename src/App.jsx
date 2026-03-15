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
  const [selectedTournament, setSelectedTournament] = useState(null)
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


  function handleSubscribe(id, isSubscribing, formData){
    const participantId = "u88test"
    setTournaments( prevTournaments =>
      prevTournaments.map(tournament => tournament.id === id ? {
        ...tournament,
        subscribed: isSubscribing,
        participants: isSubscribing && formData ?
        [
          ...tournament.participants,{
            id: participantId,
            avatar: "https://i.pravatar.cc/150?u=u2",
            name: formData.name,
            // team: formData.team,
            // level: formData.level,
            status: "Confirmed"
          }
        ] : tournament.participants.filter(item => item.id !== participantId),
        participantsCount: {
          ...tournament.participantsCount,
          current: isSubscribing ? tournament.participantsCount.current + 1 
                                 : tournament.participantsCount.current - 1 
        }
      } : tournament)
    )
  }

  function handleOpenForm(tournament){
      setSelectedTournament(tournament)
      setShowForm(true)
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
                      <CardsContainer tournaments={filteredTournaments} onSubscribe={handleSubscribe} onOpenForm={handleOpenForm}/>
                      <Navbar />
                      {showFilter && <FilterPopup onClose={() => setShowFilter(false)} />}
                      {showForm && <RegistrationForm tournaments={tournaments} tournament={selectedTournament} handleSubscribe={handleSubscribe} onClose={() => setShowForm(false)}/>}
                  </>
              }/>
              {/*Tournament Page*/}
              <Route path="/tournament/:id" element={
                  <>
                    <TournamentDetails tournaments={tournaments} />
                    <Navbar />
                  </>
              }/>

          </Routes>
            </BrowserRouter>
    </>
    
  )
}

export default App
