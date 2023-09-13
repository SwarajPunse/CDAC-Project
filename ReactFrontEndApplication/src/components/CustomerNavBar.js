import { Link } from "react-router-dom";

export default function CustomerNavBar() {

  const username = JSON.parse(localStorage.getItem("loggedUser"));
  console.log(username)
  
 

  return (
    
     <div><h1>Welcome {username.username}!</h1>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary mb-3">

    <div className="container-fluid">
      <ul className="navbar-nav">
      <li className="nav-item">
          <Link to="/CustomerHome" id="1" className="nav-link px-3 text-light">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/allProducts" className="nav-link px-3 text-light">Artworks</Link>
        </li>
        <li className="nav-item">
          <Link to="/allArtist" className="nav-link px-3 text-light">Artists</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link px-3 text-light">Cart</Link>
        </li>
        <li className='nav-item'>
            <Link to="/login" className='nav-link px-3 text-light'>Logout</Link>
            </li>

      </ul>
       {/* <span><b>Welcome {username.fname}</b></span>  */}
    </div>
    
          
  </nav >
  </div>

  )
}