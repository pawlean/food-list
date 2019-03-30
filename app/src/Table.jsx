import React from 'react';
import './App.css';
import './custom.css';

function Table({ foods }) {
  return (
    <table>
    <tr>
    <th class="food-title">Food</th>
    <th class="carbs">Carbs</th>
    <th class="fat">Fat</th>
    <th class="protein">Protein</th>
    </tr>
    { foods.map(food => (
      <tr>
      <td>{food.name}</td>
      <td>{food.fat}</td>
      <td>{food.protein}</td>
      <td>{food.carbs}</td>
      </tr>))
    }
    </table>
  )

}



export default Table;
