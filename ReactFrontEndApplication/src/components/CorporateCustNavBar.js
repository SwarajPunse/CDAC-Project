import { Link } from "react-router-dom";

export default function CorporateCustNavBar() {

  const username = JSON.parse(localStorage.getItem("loggedUser"));

  return (
    <div><h1>Welcome {username.username}!</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">

    <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/CorporateCustHome" id="1" className="nav-link px-3">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/AllProductCorpComp" className="nav-link px-3">Artworks</Link>
        </li>
        <li className="nav-item">
          <Link to="/AllArtistCorpComp" className="nav-link px-3">Artists</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link px-3">Cart</Link>
        </li>
        <li className='nav-item'>
            <Link to="/login" className='nav-link px-3'>Logout</Link>
            </li>

      </ul>
       {/* <span><b>Welcome {username.fname}</b></span>  */}
    </div>
    
          
  </nav >
  </div>

  )
}