import { Link } from "react-router-dom";

export default function AdminNavBar() {

  const username = JSON.parse(localStorage.getItem("loggedUser"))

  return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">
      {/* <div class="p-3 mb-2 bg-secondary text-white">.bg-secondary</div> */}

        <div className="container-fluid text-white">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/admin" className="nav-link px-3 text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/approval" className="nav-link px-3 text-white">Artist Approval</Link>
            </li>

            <li className="nav-item">
              <Link to="/ApprovalCorporateCust" className="nav-link px-3  text-white">Corporate Customer Approval</Link>
            </li>
          
            <li className="nav-item">
              <Link to="/allArtists" className="nav-link px-3  text-white">All Artists</Link>
            </li>
            <li className="nav-item">
              <Link to="/allCustomers" className="nav-link px-3  text-white">All Customers</Link>
            </li>
            <li className="nav-item">
              <Link to="/allCoCustomers" className="nav-link px-3  text-white">All Corporate Customers</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link px-3  text-white">Logout</Link>
            </li>
            
          </ul>
          <span><h4><b>Welcome {username.username}!</b></h4></span>
        </div>

      </nav >
     
      <br/>
      <h1>Welcome to Administrative Area</h1>
      
    </ div>

  )
}