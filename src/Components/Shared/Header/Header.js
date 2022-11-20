import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="bg-dark text-white navbar navbar-inverse navbar-static-top text-center d-flex justify-content-center">
      <a href="/" className="navbar-brand">
        <i className="fa-solid fa-book-open  "></i>
        Todo App
        <i className="fa-solid fa-book-open  "></i>
      </a>
    </div>
  );
}

export default Header;
