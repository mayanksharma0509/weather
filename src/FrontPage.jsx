import React from "react";
import { Link } from "react-router-dom";

function FrontPage() {
  return (
    <header
      className="headerbg">
      {/* Navbar */}
      <nav className="navbutton">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </nav>
    </header>
  );
}

export default FrontPage;
