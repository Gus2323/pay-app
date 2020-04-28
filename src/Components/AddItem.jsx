import React, { useState } from "react";
import "../Components/Styles/AddItem.css";
import "../App.css";
import Card from "./Card.jsx";
import axios from "axios";
import { storage } from "../firebase/firebase";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    const allInputs = { imgUrl: [] };
    this.state = {
      imageAsFile: "",
      imageAsUrl: allInputs,
    };
  }

  fileHandler = (event) => {
    console.log(event.target.files[0]);
  };
  uploadHandler = () => {
    axios.post("");
  };
  handleClick() {
    console.log("done button clicked");
    // const name = document.getElementById("item-name").value; //gets name input
    // const description = document.getElementById("item-description").value;
  }

  handleImageAsFile = (e) => {
    console.log(this.state.imageAsFile);
    const image = e.target.files[0];
    this.setState({
      imageAsFile: image,
    });
  };

  handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (this.state.imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${this.state.imageAsFile.name}`)
      .put(this.state.imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(this.state.imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            this.setState({
              imageAsUrl: {
                imgUrl: this.state.imageAsUrl.imgUrl.concat(fireBaseUrl),
              },
            });
          });
      }
    );
  };

  render() {
    return (
      <div>
        <h1>My Listings</h1>
        <div className="new-card">
          <h1 className="new">New Listing</h1>
          <form onSubmit={this.handleFireBaseUpload}>
            <input
              type="text"
              placeholder="Enter Item Name"
              id="item-name"
            ></input>
            <input type="file" onChange={this.handleImageAsFile}></input>
            {/* <input type="file" onChange={this.fileHandler} /> */}

            <input
              type="text"
              placeholder="Enter Item Description"
              id="item-description"
            ></input>
            <button>Submit</button>
            {/* <button onClick={this.handleClick}>Done</button> */}
          </form>
        </div>
        <img
          className="new-img"
          src={this.state.imageAsUrl.imgUrl[0]}
          alt="firebase image"
        />
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
          <Card name="new" img={this.state.imageAsUrl.imgUrl[1]} />
          <Card />
        </div>
      </div>
    );
  }
}

export default AddItem;
