import React from "react";
import "./style.css";

function Portfolio() {
    return (
        <div>
            <div id="main-container" className="container">
                <section className="main-section">
                     <h1>Portfolio</h1>
                <div className="work">
                 <img src="Assets/Images/30-Minute-Workouts.png" alt="Project#1" />
                 <a href="https://kshep425.github.io/30-Minute-Workouts" target="_blank">
                    <h5>30 Minute Workout App</h5>
                 </a>

                 </div>
                 <div className="work">
                <img src="Assets/Images/Password-Generator.png" alt="Password Generator" />
                <a href=" https://mhavrilak.github.io/Password-Generator/" target="_blank">
                    <h5>Password Generator App</h5></a>
                </div>

            <div className="work">
                <img src="Assets/Images/Day-Planner.png" alt="Day Planner" />
                <a href="https://mhavrilak.github.io/Day-Planner/" target="blank">
                    <h5>Day Planner</h5>
                </a>

            </div>
            <div className="work">
                <img src="Assets/Images/Github-Portfolio.png" alt="Github Portfolio" />
                <a href="https://github.com/MHavrilak" target="blank">
                    <h5>Github Profile</h5>
                </a>
            
            </div>
            <div className="work">
                <img src="Assets/Images/yappE.png" alt="Project Two" />
                <a href="https://yappe.herokuapp.com/" target="blank">
                    <h5>yappE</h5>
                </a>
            </div>
            <div className="work">
                <img src="Assets/Images/resume.png" alt="Resume" />
                <iframe title="resume" src="file:///C:/Users/Mike%20H/Desktop/michaelhavrilakresume%20copy%20(2).pdf" target="blank" >
                    <h5>Resume</h5>
                </iframe>
            </div>
        </section>
    </div>
    {/* <footer>
        
    </footer> */}
        </div>
    )
}

export default Portfolio;