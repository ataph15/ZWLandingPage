import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sandwiches" component={Sandwiches} />
                <Route exact path="/sides" component={Sides} />
                <Route exact path="/drinks" component={Drinks} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Sandwiches() {
  return <p>Browse our numerous sandwiches options</p>;
}

function Sides() {
  return <p>Solutions that help you.</p>;
}

function Drinks() {
  return <p>Please follow us @</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          Welcome to Zenwich
        </h5>
      </div>
    </div>
  );
}
export default App;
