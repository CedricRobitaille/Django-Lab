import { useEffect, useState } from "react"
import "./Table.css"
const Table = ({ view, handleSearch, handleSearchInput, tableContents, headers, search }) => {

  

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