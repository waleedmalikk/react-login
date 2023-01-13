import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLogin from "./Context";

function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const stuff = useLogin();
  const navigate = useNavigate();

  async function handleSubmit(ev) {
    ev.preventDefault();
    const client = axios.create({
      baseURL: "http://localhost:5000/api/users/register",
    });
    try {
      const response = await client.post("", {
        email: email,
        password: password,
        name: name,
        phone: phone,
      });
      stuff.set_email(email);
      stuff.set_token(response.data.accessToken);
      localStorage.setItem(
        "user_token",
        JSON.stringify(response.data.accessToken)
      );
      navigate("/table");
    } catch (error) {
      alert(error.response.data.msg);
      console.log(error);
    }
  }

  return (
    <div className="auth-form-container App">
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
          name="name"
          id="name"
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="1234567"
          name="phone"
          id="phone"
        />
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
        <button>Register</button>
      </form>
      <Link to="/login">
        <button className="link-btn">
          Already have an account? Login Here.
        </button>
      </Link>
    </div>
  );
}
export default Register;
