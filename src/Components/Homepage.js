import React from 'react';

import "../App.css";

import Header from "../Components/Header";

class Homepage extends React.Component {
    render() {
        return (<div>
            <div className="App">
                <Header />
                <a href="/new-item">
                    <button id="add">Add Item</button>
                </a>
                <h1>My Listings</h1>
            </div>
        </div>
        );
    }
}

export default Homepage;
