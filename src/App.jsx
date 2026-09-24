import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import { useState } from "react";

function App()
{
    const [darkMode, setDarkMode] = useState(false);
    return(
    <>
    {/* navbar and hero different class to show the bg image properly */}

      <div className={darkMode ? "dark-mode" : ""}> 
            <div className="top">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Skills />
            <Resume />
            <Footer />
            <button className="dark-btn" 
            onClick={() => setDarkMode(!darkMode)}>
                 {darkMode ? "☀️" : "🌙"}

            </button>
       </div>
     {/* <h1>Hello</h1> */}
    </>
    )

}

export default App