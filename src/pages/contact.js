import React from "react";
import NavBar from "../components/NavBar";
import Row from "../components/Row";
import Col from "../components/Col";
// import Container from "../components/Container";
import Form from "../components/Form";

function Contact() {
    return(
        <div>
        <NavBar />
        {/* // <Container>
        */}
            <Row>
                <Col size="sm-12">
                <Form />
                </Col>
            </Row>
           
        {/* </Container> */}
         </div>
    )
}

export default Contact;