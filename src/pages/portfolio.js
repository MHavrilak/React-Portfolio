import React from "react";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Col from "../components/Col";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

function PortfolioPage() {
    return (
        <div>
    <NavBar />
    <Row>
         <Col size="sm-12">
             <Portfolio />
      
        </Col>
    </Row>
    <Footer />
    </div>
    )
}

export default PortfolioPage;