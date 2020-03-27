import React from "react";

function AboutSection() {
    return (
        <div id="main-container" className="container">
        <section className="main-section">
            <h1>About Me</h1>
            <p><img src="assets/images/Image1.jpg" className="auth-image" alt="Mike Havrilak" width="200"
                    height="200" />Hello! My name is Mike Havrilak and welcome to my Porfolio Page!
                Born and raised in Baltimore, I am currently enrolled in Johns Hopkins University's Coding Bootcamp.
                I am currently seeking a position with a local company as a web developer. After this six month bootcamp
                course is completed I will be a certified front end and back end web developer.</p>
            <p>I currently reside in Lutherville, MD with my wife and four year old daughter. I enjoy spending
                as much time wtih her as humanely possible with her as she is the light of my life. I am looking 
                forward to teaching her the value of hard work and that hard work and dedication to achievement 
                will allow anyone to reach the stars!
            </p>
            <p> I hope you enjoy viewing my webpage. I look forward to hearing from you soon. Feel free to
                shoot me an email to talk about any career opportunities!

                All the Best,

                Mike
            </p>
        </section>
        </div>
    )
}

export default AboutSection;