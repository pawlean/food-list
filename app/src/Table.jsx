import React from 'react';
import './App.css';
import './custom.css';

function Table() {
  return (
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
  )

}

export default Table;
