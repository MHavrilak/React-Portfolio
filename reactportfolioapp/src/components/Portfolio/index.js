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
                    <h4>30 Minute Workout App</h4>
                 </a>

                 </div>
                 <div className="work">
                <img src="Assets/Images/Password-Generator.png" alt="Password Generator" />
                <a href=" https://mhavrilak.github.io/Password-Generator/" target="_blank">
                    <h4>Password Generator App</h4></a>
                </div>

            <div className="work">
                <img src="Assets/Images/Day-Planner.png" alt="Day Planner" />
                <a href="https://mhavrilak.github.io/Day-Planner/" target="_blank">
                    <h4>Day Planner</h4>
                </a>

            </div>
            <div className="work">
                <img src="Assets/Images/Github-Portfolio.png" alt="Github Portfolio" />
                <a href="https://github.com/MHavrilak" target="_blank">
                    <h4>Github Profile</h4>
                </a>
            
            </div>
            <div className="work">
                <img src="Assets/Images/yappE.png" alt="Project Two" />
                <a href="https://yappe.herokuapp.com/" target="_blank">
                    <h4>yappE</h4>
                </a>
            </div>
        </section>
    </div>
    <a href="https:https://www.linkedin.com/in/mike-havrilak-96b1548/" target="_blank"><i className="fab fa-linkedin"></i></a>
    <a href="https://github.com/MHavrilak" target="_blank"><i className="fab fa-github-square"></i></a>
    {/* <footer>
        
    </footer> */}
        </div>
    )
}

export default Portfolio;