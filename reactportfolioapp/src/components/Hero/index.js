import React from "react";
import "./style.css";


function Hero(props) {
    return (
        <div className="hero text-center" >
            <video autoPlay muted loop id="myVideo">
                <source src="../Assets/Images/background.mp4" type="video/mp4" />
            </video>

        <div className="content">
        <h1>Welcome</h1>
        </div>
            {props.children}
            </div>
    );

}

export default Hero;