import React, { Component } from 'react'

export default class index extends Component {
  render() {
    const { todos, clearAllChecked} = this.props

    const done = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

    return (
      <div className="footer">
        <div style={{ float: "left" }}>
          <input type="checkbox" checked={done === todos.length} onChange={this.handleAllChecked} />已完成 {done} / 全部 {todos.length}
        </div>
        <button onClick={clearAllChecked} style={{ float: "right" }}>清除已完成任务</button>
      </div>
    )
  }

  handleAllChecked = (event) => {
    this.props.handleAllChecked(event.target.checked)
  }

}
