import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class index extends Component {
  
  componentDidMount() {
    this.search()
  }
  
  search = () => {
    const keyword = this.keywordEle.value
    axios.get('/api1/cars?name=' + keyword).then(res => {
      console.log(res)
      PubSub.publish('cars', { cars: res.data })
    })
  }

  render() {
    return (
      <div>
        <div className="search">
          <p>Search By Github Users</p>
          <input ref={c => this.keywordEle = c} type="text" placeholder="Input name to search" />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }
}
