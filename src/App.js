import './App.css';
import Header from './myComponents/Header';
import Footer from './myComponents/footer';
import Signup from './myComponents/Signup';
import Login from './myComponents/login';
import Homepage from './myComponents/Homepage';
import AddBlog from './myComponents/AddBlog.js';
import OTP from './myComponents/OTP';
import Awareness from './myComponents/AwarenessPortal';
import "./css/awareness.css";
import "./css/about.css";
import "./css/career.css";
import "./css/contact.css";
import About from './myComponents/About';
import Career from './myComponents/Career.js';
import Contact from './myComponents/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState ,useEffect} from 'react';


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // Check if the user is logged in using useEffect
  useEffect(() => {
    // Check for the presence of a token in localStorage or any other storage mechanism
    const token = localStorage.getItem('authToken'); // Change 'authToken' to your token key

    // Update the user authentication state based on the presence of the token
    if (token) {
      setIsUserLoggedIn(true);
    } else {
      setIsUserLoggedIn(false);
    }
  }, [isUserLoggedIn]);

  return ( 
     <Router>
   <div>
     <Header isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn} />
      <Routes>
     <Route path="/" element={<Homepage/>}/>
     <Route path="/awareness" element={<Awareness/>}/>
     <Route path="/addblog" element={<AddBlog/>}/>
     <Route path="/career" element={<Career/>}/>
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact />} />
     <Route path="/otp" element={<OTP/>}/>
     <Route path="/signup" element={<Signup/>}/>
     <Route path="/login" element={<Login isUserLoggedIn={isUserLoggedIn} setIsUserLoggedIn={setIsUserLoggedIn}/>}/>
   </Routes>
   <Footer/>
   </div>
   
   </Router>
  );
}

export default App;
