import React from 'react';
import './App.css';
import './custom.css';

function Table(props) {
  return (
    <table>
    <tbody>
    <tr>
    <th className="food-title">Food</th>
    <th className="carbs">Carbs</th>
    <th className="fat">Fat</th>
    <th className="protein">Protein</th>
    </tr>
    {props.foods.map(food => (
      <tr>
      <td>{food.name}</td>
      <td>{food.fat}</td>
      <td>{food.protein}</td>
      <td>{food.carbs}</td>
      </tr>))
    }
    </tbody>
    </table>
  )

}



export default Table;
