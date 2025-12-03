import "./SideNav.css"

const SideNav = ({ handleViewChange, view }) => {

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleViewChange("company")} className={view=="company" ? "active" : ""}>Companies</button>
        </li>
        <li>
          <button onClick={() => handleViewChange("location")} className={view == "location" ? "active" : ""}>Locations</button>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav