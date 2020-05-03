import React from "react";
import "./Styles/Header.css";

class Header extends React.Component {
  render() {
    function cartClick() {
      return console.log("account clicked");
    }

    return (
      <header className="header">
        <img
          onClick={cartClick}
          src="https://img.icons8.com/cotton/2x/small-business--v2.png"
          alt="Account"
        />
        My Store
      </header>
    );
  }
}

export default Header;
