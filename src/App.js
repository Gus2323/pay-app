import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

//Styles

//Components
import Homepage from './Components/Homepage';
import AddItem from './Components/AddItem';
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/new-item" component={AddItem} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
