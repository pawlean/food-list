import React from 'react';
import axios from 'axios';

import Table from './Table';

export default class FoodList extends React.Component {
  state = {
    foods: []
  }

  componentDidMount() {
    axios.get("/api")
    .then(res => {
      const foods = res.data;
      this.setState({ foods });
    })
  }

  render() {
    console.log(this.state)
    return(
      <Table foods={this.state.foods} />
    )
  }
}