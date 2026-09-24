import React from "react";
export default function Resume()
{
    return(
        <>
        <section id="resume">
        <div className="section-heading">
            <h2>A SUMMARY OF MY RESUME</h2>
        </div>
        <div className="resume-container">
            <div className="education">
                <h2 className="section-title">My Education</h2>
                <div className="resume-card">
                    <h3 className="card-title">B.Sc in Computer Science and Engineering</h3>
                    <p className="card-info">Mettropolitan University,Bangladesh /2024-2027</p>                 
                </div>
                
                <div className="resume-card">
                    <h3 className="card-title">H.S.C / INTERMEDIATE</h3>
                    <p className="card-info">Murarichand College,Sylhet/2018-2020</p>                 
                </div>
                
                <div className="resume-card">
                    <h3 className="card-title">S.S.C</h3>
                    <p className="card-info">Sylhet Govt. Pilot High School,Sylhet/2010-2018</p>                 
                </div>

            </div>
            <div className="experience">
                <h2 className="section-title">My Experience</h2>
                <div className="resume-card">
                    <h3 className="card-title">Video Editor For My Friends</h3>
                    <p className="card-info">Did Editing for my friends</p>                 
                </div>

              </div>
            </div>
    </section>
        </>
    )
}