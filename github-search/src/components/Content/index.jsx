import React, { Component } from 'react'
import Item from '../Item'
import './content.css'

export default class index extends Component {
  render() {
    return (
      <div className="content">
        {
          this.props.cars.map((car, index) => {
            return <Item name={car.name} key={index} />
          })
        }
      </div>
    )
  }
}
