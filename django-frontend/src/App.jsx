
import { useState } from 'react'
import './App.css'

import SideNav from './components/SideNav/SideNav'
import Form from './components/Form/Form'
import Table from './components/Table/Table'

function App() {

  const [view, setView] = useState("company")
  const [formAction, setFormAction] = useState("create")

  const handleViewChange = (newView) => {
    newView === "company" ? setView("company") : setView("location")
  }


  return (
    <div className="document">
      <SideNav handleViewChange={handleViewChange} />
      <section>
        <header>
          <h1>Companies</h1>
        </header>

        <main>
          <Table view={view} />
          <Form formAction={formAction} view={view} />
        </main>
      </section>
    </div>
  )
}

export default App
