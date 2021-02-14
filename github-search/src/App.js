import React, { Component } from 'react'
import './App.css';

import Search from './components/Search'
import Content from './components/Content'

import axios from 'axios'

export default class App extends Component {

  search = (keyword) => {
    console.log(keyword)
    axios.get('/api1/cars').then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="App">
        <Search search={this.search} />
        <Content />
      </div>
    )
  }
}
