import React, { Component } from 'react'

export default class index extends Component {

  render() {
    return (
      <div className="item">
        <input type="checkbox" style={{ float: "left" }} />
        <span>{this.props.name}</span>
        <button style={{ float: "right" }}>删除</button>
      </div>
    )
  }
}
