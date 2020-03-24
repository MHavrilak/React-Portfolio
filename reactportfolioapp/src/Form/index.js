import React from "react";

class contactForm extends Component {
    render() {
        return (
            <Form>
  <Form.Group controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" />
  </Form.Group>
    
  <Form.Group controlId="Email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="Email" />
  </Form.Group>

  <Form.Group controlId="Message">
      <Form.label>Message</Form.label>
      <Form.Control type="text" placeholder="Message" />
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        )
    }
}
export default contactForm