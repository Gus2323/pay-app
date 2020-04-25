import React from "react";
import "./Styles/Header.css";

class Header extends React.Component {
  render() {
    function cartClick() {
      return console.log("account clicked");
    }

    return (
      <header className="header">
        Store Name Goes Here
        {/* <button className="cart">cart</button> */}
        <img
          onClick={cartClick}
          src="https://img.icons8.com/cotton/2x/gender-neutral-user.png"
          alt="Account"
        />
      </header>
    );
  }
}

export default Header;
