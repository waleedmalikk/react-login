import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useLogin from "./Context";

function Login() {
  const [uemail, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stuff = useLogin();
  const navigate = useNavigate();

  async function handleSubmit(ev) {
    ev.preventDefault();
    const client = axios.create({
      baseURL: "http://localhost:5000/api/users/login",
    });
    try {
      const response = await client.post("", {
        email: uemail,
        password: password,
      });
      stuff.set_email(uemail);
      stuff.set_token(response.data.accessToken);
      localStorage.setItem(
        "user_token",
        JSON.stringify(response.data.accessToken)
      );
      navigate("/table");
    } catch (error) {
      alert(error.response.data.msg);
    }
  }
  return (
    <div className="App auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="abc@xyz.com"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*******"
          name="password"
          id="password"
        />
        <button>Login</button>
      </form>
      <Link to={"/register"}>
        <button className="link-btn">
          Don't have an account? Register Here.
        </button>
      </Link>
    </div>
  );
}
export default Login;
