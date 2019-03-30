import React, { Component } from 'react';
import axios from 'axios';

export default class FoodList extends React.Component {
  state = {
    foods: []
  }

  componentDidMount() {
    axios.get("http://localhost:4000/")
    .then(res =>{
      const foods = res.data;
      this.setState({ foods });
    })
  }

  render() {
    return(
      <Table foods={this.state.foods}/>;
    )
  } 
}
