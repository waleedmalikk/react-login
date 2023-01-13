import { Link } from "react-router-dom";
import React from "react";
export const Navbar = () => {
  return (
    <div>
      <Link to="/login"> Login </Link>
      <Link to="/register"> Register </Link>
      <Link to="/table"> Table </Link>
    </div>
  );
};
