import React, { Component } from 'react'
import Item from '../Item'
import PubSub from 'pubsub-js'
import './content.css'

export default class index extends Component {

  constructor(props) {
    super(props)
    this.state = { cars: [] }
  }

  componentDidMount() {
    PubSub.subscribe('cars', (_, state) => {
      this.setState(state)
    })
  }

  render() {
    return (
      <div className="content">
        {
          this.state.cars.map((car, index) => {
            return <Item name={car.name} key={index} />
          })
        }
      </div>
    )
  }
}
