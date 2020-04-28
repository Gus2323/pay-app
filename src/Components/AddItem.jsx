import React from "react";
import "../Components/Styles/AddItem.css";
import "../App.css";
import Card from "./Card.jsx";
import axios from "axios";

class AddItem extends React.Component {
  state = {
    selectedFile: null,
  };

  fileHandler = (event) => {
    this.setState({
      selectedFile: event.target.files[0],
    });
  };
  uploadHandler = () => {
    axios.post("");
  };
  render() {
    function handleClick() {
      const name = document.getElementById("item-name").value;
      const description = document.getElementById("item-description").value;
    }
    return (
      <div>
        <h1>My Listings</h1>
        <div className="new-card">
          <h1 className="new">New Listing</h1>
          <form>
            <input
              type="text"
              placeholder="Enter Item Name"
              id="item-name"
            ></input>
            <input type="file" onChange={this.fileHandler} />
            <input
              type="text"
              placeholder="Enter Item Description"
              id="item-description"
            ></input>
            <button onClick={handleClick}>Done</button>
          </form>
        </div>
        <div className="card-container">
          <Card
            name="Men's T-Shirt"
            description=""
            img="https://img.icons8.com/carbon-copy/2x/clothes.png"
            price="$4.99"
          />
          <Card
            name="Women's T-Shirt"
            description=""
            img="https://img.icons8.com/ios/2x/womens-t-shirt.png"
            price="$4.99"
          />
          <Card
            name="Hanger Pack (20)"
            description=""
            img="https://img.icons8.com/color/2x/hanger.png"
            price="$9.99"
          />
          <Card
            name="Sunglasses"
            description=""
            img="https://img.icons8.com/cotton/2x/glasses--v3.png"
            price="$9.99"
          />
          <Card name={this.name} />
          <Card />
        </div>
      </div>
    );
  }
}

export default AddItem;
