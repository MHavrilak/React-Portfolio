import React from "react";

function contactForm() {
  return (
    //             <Form>
    //   <Form.Group controlId="Name">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="text" placeholder="Name" />
    //   </Form.Group>

    //   <Form.Group controlId="Email">
    //     <Form.Label>Email</Form.Label>
    //     <Form.Control type="text" placeholder="Email" />
    //   </Form.Group>

    //   <Form.Group controlId="Message">
    //       <Form.label>Message</Form.label>
    //       <Form.Control type="text" placeholder="Message" />
    //   </Form.Group>


    //   <Button variant="primary" type="submit">
    //     Submit
    //   </Button>
    // </Form>
   
    <form>
    <div className="form-group">
      <label for="username">Name</label>
      <input type="text" className="form-control" id="username" aria-describedby="Name"/>
     </div>
      <div className="form-group">
        <label for="useremail">Email</label>
        <input type="text" className="form-control" id="useremail"/>
       </div>
        <div className="form-group">
          <label for="usermessage">Message</label>
          <input type="text" className="form-control" id="usermessage"/>
       </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>       
        )
}
export default contactForm;