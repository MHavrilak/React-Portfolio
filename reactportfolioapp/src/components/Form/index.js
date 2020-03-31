import React from "react";
import "./style.css";

function contactForm() {
  return (
    <div className="container" id="main-container">
      <h1> Contact</h1>
    <form className="main-section">
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
          <p><a href="https:https://www.linkedin.com/in/mike-havrilak-96b1548/" target="_blank"><i className="fab fa-linkedin"></i>Linkedin</a></p>
          <p><a href="https://github.com/MHavrilak" target="_blank"><i className="fab fa-github-square"></i>Github</a></p>   
      </form> 
      </div>   
         )        
          
}
export default contactForm;