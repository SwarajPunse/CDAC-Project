import { Link } from "react-router-dom";

export default function ArtistNavBar() {

  const username = JSON.parse(localStorage.getItem("loggedUser"))

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">

        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link to="/ArtistHome" className="nav-link px-3 text-white">Home</Link>
            </li>
              <li>
            <Link to="/AddArtwork"className="nav-link px-3 text-white">Insert new artwork</Link>
      </li>

            {/* <li className="nav-item">
              <Link to="/approval" className="nav-link px-3">Artist Approval</Link>
            </li>
          
            <li className="nav-item">
              <Link to="/allArtists" className="nav-link px-3">All Artists</Link>
            </li>
            <li className="nav-item">
              <Link to="/allCustomers" className="nav-link px-3">All Customers</Link>
            </li>
            <li className="nav-item">
              <Link to="/allCoCustomers" className="nav-link px-3">All Corporate Customers</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/login" className="nav-link px-3 text-white">Logout</Link>
            </li>
            
          </ul>
          <span><b>Welcome {username.username}!</b></span>
        </div>

      </nav >
    </ div>

  )
}