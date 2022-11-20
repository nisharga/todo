import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer class="bg-dark text-center text-lg-start text-white">
      <div className="text-center p-3 footer_bg">
        © 2022 Copyright:{" "}
        <a
          className="text-white"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/nisharga"
        >
          Nisharga Kabir
        </a>
      </div>
    </footer>
  );
}

export default Footer;
