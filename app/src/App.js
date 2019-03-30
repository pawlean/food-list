import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './custom.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1>😋 Food List</h1>

        <table>
        <tr>
        <th class="food-title">Food</th>
        <th class="carbs">Carbs</th>
        <th class="fat">Fat</th>
        <th class="protein">Protein</th>
        </tr>
        <tr>
        <td>Cheese</td>
        <td>70%</td>
        <td>20%</td>
        <td>10%</td>
        </tr>
        <tr>
        <td>Bread</td>
        <td>70%</td>
        <td>20%</td>
        <td>10%</td>
        </tr>
        <tr>
        <td>Milk</td>
        <td>70%</td>
        <td>20%</td>
        <td>10%</td>
        </tr>
        </table>
        </header>
        <footer>
        <p>Created with 💜 by <a href="https://twitter.com/_mattburman">Matt</a> & <a href="https://twitter.com/paulienuh">Pauline</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
