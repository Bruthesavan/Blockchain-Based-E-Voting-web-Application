import React from "react";

const Login = (props) => {
    return (
        <div className="login-container"
        style={{
            backgroundImage: `url(blockchain.jpg)`, // Replace 'path/to/your/image.jpg' with the actual path to your image
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          >
            <h1 className="welcome-message" 
            style={{
                color: "white", // Add this line to set the font color to white
              }}
              >Welcome to Blockchain voting application</h1>
            <button className="login-button" onClick = {props.connectWallet}>Login</button>
        </div>
    )
}

export default Login;