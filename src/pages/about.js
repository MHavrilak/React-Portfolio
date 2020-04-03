import React from "react";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Col from "../components/Col";
// import Container from "../components/Container";
import Footer from "../components/Footer";
import AboutSection from "../components/About";

function About() {
    return (
        <div>
        <NavBar />
        {/* // <Container> */}
       
            {/* <h1>About Me</h1> */}
            <Row>
                <Col size="sm-12">               
                    <AboutSection />
               
                </Col>
            </Row>
            <Footer />
        {/* </Container> */}
        </div>
    )
}

export default About;
