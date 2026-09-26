import React from "react";
export default function About(){
    return(
        <>
        <section id="about">
            <div className="about-container">
                <div className="section-heading">
                    <h2>About me</h2>
                    <p>I’m someone who finds inspiration at the intersection of nature and technology. 
                       I love immersing myself in video games, exploring art and comics, staying active with sports, and keeping up with the ever-evolving world of tech. Whether it’s a quiet moment appreciating natural beauty or diving deep into a digital experience, 
                       I enjoy learning, creating, and pushing my curiosity in new directions.</p>
                </div>
                <div className="about-info">
                
                    <div className="info-card">
                        <p>Name</p>
                        <h4>Shafiil Ahmed</h4>
                    </div>
                    <div className="info-card">
                        <p>Email</p>
                        <h4>sadatshafiil@gmail.com</h4>
                    </div>
                    <div className="info-card">
                        <p>University</p>
                        <h4>Metropolitan University,Bangladesh</h4>
                    </div>
                    <div className="info-card">
                        <p>From</p>
                        <h4>Dhaka,Bangladesh</h4>
                    </div>
                </div>   
            </div>
        </section>
        </>
    )
}