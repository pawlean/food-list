import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import FoodList from './FoodList';
import CreateFood from './CreateFood';
import Footer from './Footer';

import './App.css';
import './custom.css';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <h1>Food List</h1>
          <Router>
              <ul>
              <Link to="/" ><li className="HomeNav"><span role="img" aria-label="home">🏠</span> Home</li></Link>
              <Link to="/add/" ><li className="HomeNav"><span role="img" aria-label="add">➕</span>Add</li></Link>
              </ul>

              <Route path="/" exact component={FoodList} />
              <Route path="/add/" exact component={CreateFood} />

          </Router>

        </header>

        <footer>
        <Footer/>
        </footer>
      </div>
    );
  }
}


export default App;
