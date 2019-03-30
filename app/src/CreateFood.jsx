import React from 'react';
import axios from 'axios';

export default class CreateFood extends React.Component {
  state = {
    url: '',
    name: '',
    fat: '',
    protein: '',
    carbs: ''
  }

handleURLChange(event) {
  const url = event.target.value;

  if(!url.startsWith('https://www.tesco.com/groceries/en-GB/products/')) return;

  axios.get(`/api/macro?url=${url}`)
    .then(res => {
      const { name, fat, protein, carbs } = res.data;
      this.setState({ url, name,
        fat: fat.toFixed(2),
        protein: protein.toFixed(2),
        carbs: carbs.toFixed(2) });
    })
    .catch(error => {
      alert(error.data);
    })
}

render() {
  return(
    <div class="FoodForm">

    <form>

      <label>URL of product
        <input type="text" name="name" onChange={this.handleURLChange.bind(this)}/>
      </label>

      <label>Name of product
        <input type="text" name="name" value={this.state.name}/>
      </label>

      <label>% fat</label>
        <input type="text" name="name" id="text1" value={this.state.fat} />

      <label>% protein</label>
        <input type="text" name="name" id="text1" value={this.state.protein} />


      <label>% carbs</label>
        <input type="text" name="name" id="text1" value={this.state.carbs} />

        <input type="submit" value="Submit" />

    </form>

    </div>
  )
}

}
