import React from "react";
import "./App.css";
import Login from "./login";
import Register from "./register";
import Table from "./table";
import Update from "./update";
// import { Navbar } from './navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginProvider } from "./Context";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/table" element={<Table />} />
          <Route path="/update" element={<Update />} />
          <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
        </Routes>
        </Router>
    </LoginProvider>
  );
}
export default App;
