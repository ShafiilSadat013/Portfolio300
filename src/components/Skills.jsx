import React from "react";
export default function Skills(){
    return(
        <>

            <section id="skills">
                <div className="skills-container">
                    <div className="section-heading">
                        <h2>What I DO</h2>
                        <p>I build and explore things using technology while expressing creativity through art and design. I enjoy learning new skills, working on projects, and combining my interests in tech, games, and visual storytelling to create meaningful and engaging experiences.</p>
                    </div>
                    <div className="skill-box">
                            <div className="skill-card">
                                <img src="images/icons/camera.png" alt="" />
                                <h3>Photography</h3>
                                <p>Capturing moments, moods, and stories through a creative lens.</p>
                            </div>
                            <div className="skill-card">
                                <img src="images/icons/game.png" alt="" />
                                <h3>Gaming</h3>
                                <p>Exploring worlds, mastering challenges, and enjoying immersive gameplay.</p>
                            </div>
                            <div className="skill-card">
                                <img src="images/icons/codeIcn.png" alt="" />
                                <h3>Coding</h3>
                                <p>Turning ideas into logic through clean, efficient code.</p>
                            </div>
                            <div className="skill-card">
                                <img src="images/icons/webicn.png" alt="" />
                                <h3>Buidling WebSites</h3>
                                <p>Designing and developing responsive, user-friendly web experiences.</p>
                            </div>                      
                    </div>
                </div>
            </section>

        </>
    )
}