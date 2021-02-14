import React, { Component } from 'react'
import Item from '../Item'
import './content.css'

export default class index extends Component {
  render() {
    return (
      <div className="content">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}
