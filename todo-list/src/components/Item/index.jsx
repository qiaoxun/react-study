import React, { Component } from 'react'

export default class index extends Component {

  check = () => {
    this.props.done = !this.props.done
  }

  delTodo = () => {
    this.props.delTodo(this.props.id)
  }
  
  checkOrUnCheck = () => {
    this.props.checkOrUnCheck(this.props.id)
  }

  render() {
    return (
      <div className="item">
        <div style={{ float: "left" }}>
          <input type="checkbox" checked={this.props.done} onChange={this.checkOrUnCheck} />
          <span>{this.props.name}</span>
        </div>
        <button style={{ float: "right" }} onClick={this.delTodo}>删除</button>
      </div>
    )
  }
}
