import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';
import Table from './Table';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>Food List 😋 </h1>

        <Table/>

        </header>
        <Footer/>
      </div>
    );
  }
}

export default App;
