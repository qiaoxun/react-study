import React, { Component } from 'react'
import './App.css';
import axios from 'axios'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {cars:[]}
  }

  getAllCars = () => {
    axios.get('/api1/cars').then(res => {
      this.setState({cars: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getAllCars}>GetAllCars</button>
        <ul>
          {
            this.state.cars.map((car, index) => {
              return <li key={index}>{car.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
