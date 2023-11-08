import React from "react";
// import IMG from "../img/MaitilabsLogo.png"
import Logo from "../assets/logo/Logo.png";
import { useNavigate } from 'react-router-dom';

function Header({ isUserLoggedIn, setIsUserLoggedIn } ) { 
  const navigate = useNavigate();

  const handleLogout = () => {
   try{
    localStorage.removeItem('authToken');
    navigate('/login');
  }
  catch(err){
    console.log(err);
  };}

  


  
  return (
    <div classNameName="d-flex justify-content-center align-items-center"
    style={{ height: "100px", marginTop: 0, border: "none"}}>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <div>
          <a href="/" className="navbar-brand">
            <img className="brand-logo " src={Logo} alt="Maitilabs_logo"/> 
            <span className="brand-title">Maiti Labs</span>
          </a>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto ">
        {isUserLoggedIn===false?<> 
        <li className="nav-item  active">
              <a className="nav-link" href="/login">Login</a>
            </li>
          <li className="nav-item  active">
              <a className="nav-link" href="/signup">Signup</a>
            </li>

          </>: <li className="nav-item  active">
              <a className="nav-link" href="/login" onClick={handleLogout} >LogOut</a>
            </li>}
            <li className="nav-item  active">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/awareness">Awareness Portal</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/career">Careers</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="/about">About</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link " href="/team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/contact">Contact</a>
            </li>
            <li className="nav-item mt-2">
              <div id="google_translate_element" className="skiptranslate translate">
             
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      
    </div>



  );
}
export default Header;