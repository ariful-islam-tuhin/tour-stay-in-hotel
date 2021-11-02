import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { setIsLoading, signInUsingGoogle } = useAuth();

  const history = useHistory();
  const location = useLocation();
  const redirect_url = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        history.push(redirect_url);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="container">
      <div className="login-form">
        <div className="login-div">
          <h3>Login Please</h3>
          <button className="g-button" onClick={handleGoogleSignIn}>
            Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
