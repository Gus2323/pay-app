import React from 'react';

import "../App.css";

import Header from "../Components/Header";
import AddItem from './AddItem';
import Card from './Card';

class Homepage extends React.Component {
    render() {
        return (<div>
            <div className="App">
                <Header />
                <h1>Community's Favorites</h1>
                <div className="card-container">
                    <Card
                    name="Blue Ice Pop"
                    img="https://img.icons8.com/cotton/2x/blue-ice-pop--v1.png"
                    price="$1.50"/>
                    <Card
                    name="Fruit Ice Cream Cone"
                    img="https://img.icons8.com/cotton/2x/fruit-ice-cream-cone.png"
                    price="$1.50"/>
                    <Card
                    name="Tripple Ice Cream Cone"
                    img="https://img.icons8.com/cotton/2x/ice-cream-cone.png"
                    price="$3.00"/>
                    
                    
                </div>
                <img className="ad" src="https://pluspng.com/img-png/ice-cream-png-download-ice-cream-png-images-transparent-gallery-advertisement-866.png" alt="ad"/>
                <AddItem />
            </div>
        </div>
        );
    }
}

export default Homepage;
