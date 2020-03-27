import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Row from "../components/Row";
import Col from "../components/Col";
import Footer from "../components/Footer";
// import Container from "../components/Container";

function Welcome() {
    return (
        // <div className="welcome-image" href="../public<Assets/Images/background.mp4">Welcome</div>
        // <Container>
        
            <Row>
                <Col size="sm-12">
                    <NavBar /> 
                    <Hero backgroundImage="../public/Assets/Images/background.mp4" />  
                    <Footer />     
                </Col>
            </Row>
            
        // </Container>
    )
}

export default Welcome;
