import React, { useState } from "react";
import { SERVER_URL } from "./constants.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBoard from "./DashBoard.js";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isAuthenticated, setAuth] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); // add state variable for login failure

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const logout = () => {
    setAuth(false);
  };

  const login = () => {
    fetch(SERVER_URL + "login", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((res) => {
        const jwtToken = res.headers.get("Authorization");
        if (jwtToken !== null) {
          sessionStorage.setItem("jwt", jwtToken);
          setAuth(true);
          setLoginFailed(false); // clear login failure state
        } else {
          setLoginFailed(true); // set login failure state
          toast.warn("Check your username and password", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  if (isAuthenticated === true) {
    return <DashBoard logout={logout} />;
  } else {
    return (
      <div className="login">
        {loginFailed && <div className="login-error"><strong>Check your username and password</strong></div>} {/* display message conditionally */}
        <br></br>
        <br></br>
        <div className="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face left"></div>
          <div class="face right"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>

        <h1 className="welcome">Welcome...</h1>
        <br></br>
        <br></br>
        <input
          placeholder="Please enter your username"
          className="login-input"
          name="username"
          label="Username"
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          placeholder="Please enter your password"
          className="login-input"
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <br />
        <br />

        <button
          className="login-button"
          variant="outlined"
          color="primary"
          onClick={login}
        >
          LOG IN
        </button>
      </div>
    );
  }
};
export default Login