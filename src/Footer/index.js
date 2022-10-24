import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by Tside Computers ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;