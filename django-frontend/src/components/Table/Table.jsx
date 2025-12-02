import { useEffect, useState } from "react"
import "./Table.css"

const Table = ({ view }) => {

  const [tableContents, setTableContents] = useState([])
  const [headers, setHeaders] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const loadTableData = async () => {
      view === "company" ?
        setHeaders(["name", "industry"]) :
        setHeaders(["Street Number", "Street", "City", "State"])

      try {
        const response = await fetch(`http://localhost:8000/api/${view}`)
        if (!response.ok) {
          throw new Error("HTTP Error! Status: " + response.status)
        }
        const data = await response.json();
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

  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`http://localhost:8000/api/${view}/${search}`)
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

  const handleSearchInput = (e) => {
    setSearch(e.target.value)
  }

  return (
    <article>
      <div className="table-controls">
        <h3>{tableContents.length} results found</h3>
        <form onSubmit={handleSearch}>
          <input type="search" placeholder="Search" value={search} onChange={handleSearchInput}/>
        </form>
        
      </div>
      
      <ul className="table">
        {headers.map((column, index) => (
          <li key={index}>
            <ul className="row">
              <li className="table-header">{column}</li>
              {tableContents.map((row, idx) => (
                <li className="table-content" key={idx}>{row[column]}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  )
}

export default Table