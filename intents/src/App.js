import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./icons.js";
import LoginPage from "./pages/LoginPage";
import ParkBlogPage from "./pages/ParkBlogPage";
import ParkInfoPage from "./pages/ParkInfoPage";
import ParksPage from "./pages/ParksPage";
import "./style.css";

function App() {
  return (
    <Router>

      <Route path="/" exact component={LoginPage || 
        //if auth = true
        ParksPage} />
      <Switch>
      <Route path="/LoginPage/" exact component={LoginPage} />
      <Route path="/ParkBlogPage/" exact component={ParkBlogPage} />
      <Route path="/ParkInfoPage/" exact component={ParkInfoPage} />
      <Route path="/ParksPage/" exact component={ParksPage} />
      </Switch>

    </Router>
  );
}

export default App;
