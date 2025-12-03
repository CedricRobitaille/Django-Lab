
import { useState, useEffect } from 'react'
import './App.css'

import SideNav from './components/SideNav/SideNav'
import Form from './components/Form/Form'
import Table from './components/Table/Table'

const companyModel = {
  name: "",
  industry: "",
}
const locationModel = {
  street_number: "",
  street: "",
  city: "",
  state: "",
}

function App() {

  const [view, setView] = useState("company") // SCENE

  const [formAction, setFormAction] = useState("create") // Create / Update 
  const [formValues, setFormValues] = useState([])  // Main Form

  const [tableContents, setTableContents] = useState([])
  const [headers, setHeaders] = useState([])
  const [search, setSearch] = useState("")

  
  // INIT LOAD
  useEffect(() => {
    // Main Form
    const initForm = () => {
      setFormValues(companyModel)
    }
    initForm();

    // Table Info
    const loadTableData = async () => {
      view === "company" ?
        setHeaders(["name", "industry"]) :
        setHeaders(["Street Number", "Street", "City", "State"])

      try {
        const response = await fetch(`http://localhost:8000/api/${view}`)
        if (!response.ok) {
          throw new Error("HTTP Error! Status: " + response.status)
        }
        let data = await response.json();
        console.log(typeof data)
        if (data.length < 2) {
          data = [data]
        }
        console.log(data)
        setTableContents(data)
      } catch (err) {
        console.log(err)
      }
    }
    loadTableData()
  }, [])


  // TABLE CONTENTS
  const fetchContent = async (currView = view, query = "") => {
    console.log(`http://localhost:8000/api/${currView}${query}`)
    try {
      const response = await fetch(`http://localhost:8000/api/${currView}${query}`)
      if (!response.ok) {
        throw new Error("HTTP Error! Status: " + response.status)
      }
      let data = await response.json();
      data = [data]
      console.log(data)
      setTableContents(data)
    } catch (err) {
      console.log(err)
    }
  }
  const handleSearch = async (e) => {
    e.preventDefault()
    fetchContent(view, `/${search}`)
  }
  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }


  // PAGE CHANGE
  const handleViewChange = (newView) => {
    if (newView === "company") {
      setView("company")
      fetchContent("company")
    } else {
      setView("location")
      fetchContent("locations")
    } 
  }



  // MAIN FORM ACTIONS
  // Submit
  const formSubmit = (e) => {
    e.preventDefault();
    if ("id" in formValues) {
      console.log(formValues)
    } else {
      console.log(formValues)
    }
    setFormValues(companyModel);
  }
  // Change
  const formChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }



  


  return (
    <div className="document">
      <SideNav handleViewChange={handleViewChange} view={view} />
      <section>
        <header>
          {view == "company" ? <h1>Companies</h1> : <h1>Locations</h1>}
        </header>

        <main>
          <Table view={view} handleSearch={handleSearch} handleSearchInput={handleSearchInput} tableContents={tableContents} headers={headers} search={search} />
          <Form formAction={formAction} view={view} formValues={formValues} formSubmit={formSubmit} formChange={formChange} />
        </main>
      </section>
    </div>
  )
}

export default App
