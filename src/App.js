import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Styles
import "./App.css";

//Components
import AddItem from "./Components/AddItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">Store Name Goes Here</header>
      <h1>My Listings</h1>
      <div className="card-container">
        <AddItem />
      </div>
    </div>
  );
}

export default App;
