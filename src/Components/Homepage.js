import React from 'react';

import "../App.css";

import Header from "../Components/Header";
import Card from "../Components/Card"

class Homepage extends React.Component {
    render() {
        return (<div>
            <div className="App">
                <Header />
                <h1>My Listings</h1>
                <div className="card-container">
                    <Card />
                </div>
            </div>
        </div>
        );
    }
}

export default Homepage;
