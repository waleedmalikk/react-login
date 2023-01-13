import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useLogin from "./Context";

function Update() {
  const [name, setName] = useState("");
    const stuff = useLogin();
  const navigate = useNavigate();
  const email_to_update = stuff.email_to_upd.email_to_upd;
     const config = {
    headers: {
      authorization: `bearer ${stuff.token.token}`,
    },
  };

  async function handleSubmit(ev) {
        ev.preventDefault();
         const client = axios.create({
      baseURL: "http://localhost:5000/api/users",
    });
    try {
        const response = await client.put('',{email:email_to_update,name:name},config);
        console.log(response)
      alert(response.data.msg);
      navigate('/table')
    } catch (error) {
        console.log(error);
        alert(error.response.data.msg);
     }
    }

  return (
    <div className="auth-form-container App">
      <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="email">User Email:</label>
        <input type="text" readOnly={true} value={email_to_update} />
              <label htmlFor="name">New Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="New Name"
        />
        <button>Update</button>
      </form>
    </div>
  );
}
export default Update;
