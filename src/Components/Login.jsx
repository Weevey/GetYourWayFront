import React, { useState } from "react";
import { SERVER_URL } from "./constants.js";
import { toast } from "react-toastify";
import DashBoard from "./DashBoard.js";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isAuthenticated, setAuth] = useState(false);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
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
        } else {
          toast.warn("Check your username and password", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      })
      .catch((err) => console.error(err));
  };

  if (isAuthenticated === true) {
    return <DashBoard />;
  } else {
    return (
      <div className="login">
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

export default Login;
