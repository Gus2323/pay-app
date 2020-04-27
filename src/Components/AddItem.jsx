import React from "react";
import "../Components/Styles/AddItem.css";
import "../App.css";
import Card from "./Card.jsx";
import axios from 'axios';

class AddItem extends React.Component {
  state = {
    selectedFile : null
  }

  fileHandler = event =>{
    this.setState({
      selectedFile: event.target.files[0]
    })
  }
  uploadHandler = () =>{
    axios.post('');
  }
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
            <input type="file" onChange={this.fileHandler}/>
            <button onClick={this.uploadHandler}>Upload</button>
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
            name="Cheeseburger"
            description="Enjoy this burger today"
            img="https://img.icons8.com/cotton/2x/cheeseburger.png"
          />
          <Card
            name="Croissant"
            description="We also serve croissants"
            img="https://img.icons8.com/cotton/2x/fries.png"
          />
          <Card
            name="Watermelon"
            description="Quench your thirst with watermelon"
            img="https://img.icons8.com/cotton/2x/watermelon.png"
          />
          <Card
            name="Sushi"
            description="We have sushi for takeout"
            img="https://img.icons8.com/cotton/2x/sushi.png"
          />
          <Card name={this.name} />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default AddItem;
