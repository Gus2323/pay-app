import React from 'react';
import './Styles/Header.css'

class Header extends React.Component{
    render(){
        function cartClick(){
            return console.log("cart clicked");
        }

        return(
            <header className="header">
        Store Name Goes Here
        {/* <button className="cart">cart</button> */}
        <img onClick={cartClick} src="https://img.icons8.com/cotton/2x/shopping-cart--v2.png" alt="Cart"/>
        </header>
        );
    }
}

export default Header;
