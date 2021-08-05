import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import LoginPage from "./screens/LoginPage";
import ParkBlogPage from "./screens/ParkBlogPage";
import ParkInfoPage from "./screens/ParkInfoPage";
import ParksPage from "./screens/ParksPage";
import "./style.css";

function App() {
  return (
    <Router>
      <Route path="/" exact component={LoginPage} />
      <Route path="/LoginPage/" exact component={LoginPage} />
      <Route path="/ParkBlogPage/" exact component={ParkBlogPage} />
      <Route path="/ParkInfoPage/" exact component={ParkInfoPage} />
      <Route path="/ParksPage/" exact component={ParksPage} />
    </Router>
  );
}

export default App;
