import React from "react";
import "../Components/Styles/AddItem.css";
import "../App.css";

class AddItem extends React.Component {
  render() {
    function handleClick() {
      return console.log("add item clicked");
    }
    return (
      <div className="card-container">
        <h1>My Listings</h1>
        <div className="card">
          <h1 className="new">Add New Item</h1>
          <button onClick={handleClick}>+</button>
        </div>
      </div>
    );
  }
}

export default AddItem;
