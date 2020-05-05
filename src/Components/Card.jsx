import React from "react";
import "../Components/Styles/Card.css";
import "./AddItem";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <h3 placeholder="Item Name">{this.props.name}</h3>
        <img className="item-image"
          src={this.props.img}
          alt="img" />
        <p>{this.props.description}</p>
        <h3 className="item-price">{this.props.price}</h3>
      </div>
    );
  }
}

export default Card;
