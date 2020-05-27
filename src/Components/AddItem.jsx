import React from "react";
import "../Components/Styles/AddItem.css";
import "../App.css";
import Card from "./Card.jsx";
import { storage } from "../firebase/firebase";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    const allInputs = { imgUrl: [] };
    this.state = {
      imageAsFile: "",
      imageAsUrl: allInputs,
      name: "",
      price: ""
    };

    this.handleName = this.handleName.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
  }

  // fileHandler = (event) => {
  //   console.log(event.target.files[0]);
  // };

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

    if (this.state.name === "") {
      console.log("enter name");
    }
    if (this.state.name === "") {
      console.log("enter name");
    }

    if (this.state.imageAsFile === "") {
      console.log(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    else {
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
    }
  };

  handleName(event) {
    if (event.target.value != null) {
      this.setState({ name: event.target.value });
    }
  }
  handlePrice(event) {
    this.setState({ price: event.target.value });
  }

  errorAlert = (a) => {
    if (this.state.name === "" || this.state.price === "")
      alert("Please input Name & Price");
  }
  render() {
    return (<div className="add-item">
      <h1>Send Us A Request!</h1>
      <div className="container">
        <div className="display">
          <div className="new-card">
            <h1 className="new">New Ice Cream</h1>
            <form onSubmit={this.handleFireBaseUpload}>
              <input className="text"
                type="text"
                placeholder="Enter Item Name"
                onChange={this.handleName}
              ></input>

              <input type="file" onChange={this.handleImageAsFile}></input>

              <input
                type="number"
                placeholder="Enter Price"
                onChange={this.handlePrice}
              ></input>

              <button onClick={() => this.errorAlert()}>Continue</button>
            </form>


          </div>

        </div>

        <div className="display">
          <Card
            name={`Name: ${this.state.name}`}
            img={this.state.imageAsUrl.imgUrl[0]}
            price={`$${this.state.price}`}
          />
        </div>
      </div>
    </div>
    );
  }
}

export default AddItem;
