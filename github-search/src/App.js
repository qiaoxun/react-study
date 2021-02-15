import React, { Component } from 'react'
import './App.css';

import Search from './components/Search'
import Content from './components/Content'

import axios from 'axios'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {cars: []}
  }

  componentDidMount() {
    this.search()
  }

  search = (keyword) => {
    console.log(keyword)
    axios.get('/api1/cars?name=' + keyword).then(res => {
      console.log(res)
      this.setState({cars: res.data})
    })
  }

  render() {
    return (
      <div className="App">
        <Search search={this.search} />
        <Content cars={this.state.cars} />
      </div>
    )
  }
}
