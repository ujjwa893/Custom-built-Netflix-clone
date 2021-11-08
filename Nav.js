import React, {useState,useEffect} from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleshow] = useState(false)
  
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleshow(true)
        } else handleshow(false);
      });
      return () => {
        window.removeEventListener("scroll")
      }
    }, []);
  
    return (
        <div className={`nav ${show && "nav__black"}`}>
             <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

            
        </div>
    )
}

export default Nav;
