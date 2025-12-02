import "./CompanyView.css"

import Table from "../Table/Table"

const CompanyView = () => {
  return (
    <>
      <header>
        <h1>Companies</h1>
      </header>
      
      <Table view="company"/>
    </>
  )
}

export default CompanyView