


function Navbar()
{
  return(
    <>
    <header className="font-open-sans">
        <nav>
            <div className="logo">
                <h2>S<span className="color-orange">D</span>T</h2>
            </div>
            <ul className="menu">
                <li><a href="http://">Portfolio</a></li>
                <li><a href="http://">Blog</a></li>
                <li><button className="btn">Hire Me</button></li>
            </ul>
        
        </nav>

        <section id="banner">
            <div className="banner-content">
                <h2>Hi, I am </h2><br />
                <h1>Sadat</h1>
                <p>In love with nature,video games,art,comics,sports and tech</p>
                <div className="btn-grp">
                    <a href="https://shafiilsadat013.github.io/ThroughMyLens/"><button className="btn">Through My Lens</button></a>
                    <a href="https://youtu.be/gCKwgLgb2Z4?si=9jgKarViEll-ps7v"><button className="btn">Listen To My Favourite Song</button></a>
                </div>
            </div>
            <div className="banner-image">
                     <img src="images/Adobe Express - file.png" alt="" />
            </div>
        </section>
    </header>

    </>
    );

}
export default Navbar