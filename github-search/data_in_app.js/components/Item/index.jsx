import React, { Component } from 'react'
import './item.css'

export default class index extends Component {
  render() {
    return (
      <div className="item">
        <font className="car">{this.props.name}</font>
      </div>
    )
  }
}
