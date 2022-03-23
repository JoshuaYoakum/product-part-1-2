// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import CreateForm from "./components/CreateForm";
import Main from "./view/main";
import React from "react";
import OneProduct from "./view/OneProduct";
function App() {
  return (
  <BrowserRouter>
    <h1> Products DB</h1>
    <p>
      <Link to="/products/new"> create new product</Link>
    </p>
    <Switch>
    <Route exact path="/">
          <Main />
        </Route>
    <Route exact path="/products/:id">
      <OneProduct />
    </Route>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
