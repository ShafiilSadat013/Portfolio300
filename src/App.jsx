import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
function App()
{
    return(
    <>
    {/* navbar and hero different class to show the bg image properly */}
    <div className="top">
        <Navbar />
        <Hero />
     </div>
     <About />
     <Skills />

     {/* <h1>Hello</h1> */}
    </>
    )

}

export default App