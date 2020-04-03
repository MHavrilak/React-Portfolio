import React from "react";
import "./style.css";

function contactForm() {
  return (
    <div className="container" id="main-container">
      
    <form className="main-section">
    <h1> Contact</h1>
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
      </div>   
         )        
          
}
export default contactForm;