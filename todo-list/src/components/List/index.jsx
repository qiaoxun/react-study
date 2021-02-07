import React, { Component } from 'react'
import Item from '../Item'

export default class index extends Component {
  render() {
    return (
      <div className="list">
        <Item name={"Joey"} />
        <Item name={"Tom"} />
        <Item name={"Jack"} />
      </div>
    )
  }
}
