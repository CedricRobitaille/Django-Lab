import "./SideNav.css"

const SideNav = ({ handleViewChange }) => {

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleViewChange("company")}>Companies</button>
        </li>
        <li>
          <button onClick={() => handleViewChange("location")}>Locations</button>
        </li>
      </ul>
    </nav>
  )
}

export default SideNav