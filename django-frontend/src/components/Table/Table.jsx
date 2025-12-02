import { useEffect, useState } from "react"
import "./Table.css"

const Table = ({ view }) => {

  const [tableContents, setTableContents] = useState([])
  const [headers, setHeaders] = useState([])

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
        console.log(data)
        setTableContents(data)
      } catch (err) {
        console.log(err)
      }
    }

    loadTableData()
  }, [])



  return (
    <article>
      <div className="table-controls">
        <h3>{tableContents.length} results found</h3>
        <input type="search" placeholder="Search" />
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