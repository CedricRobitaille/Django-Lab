
import { useState } from 'react'
import './App.css'

import SideNav from './components/SideNav/SideNav'
import CompanyView from './components/CompanyView/CompanyView'
import LocationView from './components/LocationView/LocationView'

function App() {

  const [view, setView] = useState("company")

  const handleViewChange = (newView) => {
    newView === "company" ? setView("company") : setView("location")
  }


  return (
    <div className="document">
      <SideNav handleViewChange={handleViewChange} />
      <main>
        {view === "company" ? <CompanyView /> : <LocationView />}
      </main>
      
    </div>
  )
}

export default App
