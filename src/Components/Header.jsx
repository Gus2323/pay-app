import React from "react";
import "./Styles/Header.css";

class Header extends React.Component {


  render() {
    const pages = ["My-Listings", "Add-Item"];
    const navbarLinks = pages.map(page => {
      return (
        <a className="links" href={"/" + page}>
          {page}
        </a >
      );
    });
    function cartClick() {
      return console.log("account clicked");
    }

    return (
      <header className="header">
        <div className="logo">
          <img
            onClick={cartClick}
            src="https://img.icons8.com/cotton/2x/small-business--v2.png"
            alt="Account"
            className="col"
          />
          <h1 className="head">My Store</h1>
        </div>

        <nav className="links">{navbarLinks}</nav>

      </header>
    );
  }
}

export default Header;
