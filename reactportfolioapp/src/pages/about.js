import React from "react";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Col from "../components/Col";
// import Container from "../components/Container";
import Footer from "../components/Footer";

function About() {
    return (
        <NavBar />
        // <Container>
            <h1>About Me</h1>
            <Row>
                <Col>
                
                <p>Hello! My name is Mike Havrilak and welcome to my Porfolio Page! Born and raised in Baltimore, I am currently enrolled in Johns Hopkins University's Coding Bootcamp. I am currently seeking a position with a local company as a web developer.</p>
                <p> After this six month bootcamp course is completed I will be a certified front end and back end web developer.
                I currently reside in Lutherville, MD with my wife and four year old daughter. I enjoy spending as much time wtih her as humanely possible with her as she is the light of my life. I am looking forward to teaching her the value of hard work and that hard work and dedication to achievement will allow anyone to reach the stars!</p>
                <p>I hope you enjoy viewing my webpage. I look forward to hearing from you soon. Feel free to shoot me an email to talk about any career opportunities! All the Best, Mike</p>
                </Col>
            </Row>
        </Container>
    )
}

export default About;
