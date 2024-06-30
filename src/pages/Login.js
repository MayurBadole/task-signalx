import React from "react";
import { useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../styles/login.css"
const Login = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (response) => {
    navigate("/home");
  };

  const handleError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="social-login">
        <GoogleOAuthProvider clientId="206544858496-kjidc8s27m43p2e4iausju21rnkujd47.apps.googleusercontent.com">
          <GoogleLogin onSuccess={handleLoginSuccess} onError={handleError} />
        </GoogleOAuthProvider>
      </div>{" "}
    </div>
  );
};

export default Login;
