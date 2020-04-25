import React from "react";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

//Styles
import "./App.css";

//Components
import AddItem from "./Components/AddItem";
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>My Listings</h1>
      <div className="card-container">
        <AddItem />
      </div>
    </div>
  );
}

export default App;
