
import React from "react";
import { useState } from "react";
export default function Navbar()
{
    const [menuOpen, setMenuOpen] = useState(false);
  return(
    <>
    <header className="font-open-sans">
        <nav>
            <div className="logo">
                <h2>S<span className="color-orange">D</span>T</h2>
            </div>
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> 
                <span></span>
                <span></span>
                <span></span>

            </button>
            <ul className={menuOpen ? "menu active" : "menu"}>
                
                        <li><a href="#top" onClick={() => setMenuOpen(false)}>Home</a></li>
                        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
                        <li><a href="#resume" onClick={() => setMenuOpen(false)}>Resume</a></li>
                        <li><a href="#footer" onClick={() => setMenuOpen(false)}>Contact</a></li>

            </ul>
        
        </nav>
       
      </header>

    </>
    );

}

