import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaGoogle} from 'react-icons/fa';
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
    <div className="">
      <div className="login-form">
        <div className="login-div">
          <h3>please log in with your (Google account) </h3>
          <button className="g-button" onClick={handleGoogleSignIn}>
          <FaGoogle style={{ color: 'green', fontSize: '30px' }} /> Google Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
