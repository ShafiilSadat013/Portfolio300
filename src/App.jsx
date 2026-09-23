import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
function App()
{
    return(
    <>
    {/* navbar and hero different class to show the bg image properly */}
    <div className="top">
        <Navbar />
        <Hero />
     </div>
     {/* <h1>Hello</h1> */}
    </>
    )

}

export default App