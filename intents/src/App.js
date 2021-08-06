import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";
import "./icons.js";
import LoginPage from "./pages/LoginPage";
import ParkBlogPage from "./pages/ParkBlogPage";
import ParkInfoPage from "./pages/ParkInfoPage";
import ParksPage from "./pages/ParksPage";
import "./style.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import Header from "./components/Header.js";



function App() {
  return (
    <BrowserRouter>
    <Header/> 
      {/* if auth = true */}

      <Route path="/" exact component={LoginPage || 
        //if auth = true
        ParksPage} />
      <Switch>
      <Route path="/LoginPage/" exact component={LoginPage} />
      <Route path="/ParkBlogPage/" exact component={ParkBlogPage} />
      <Route path="/ParkInfoPage" exact component={ParkInfoPage} />
      <Route path="/parks" exact component={ParksPage} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
