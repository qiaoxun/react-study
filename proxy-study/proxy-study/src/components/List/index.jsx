import React, { Component } from 'react'
import Item from '../Item'

export default class index extends Component {
  render() {
    const { delTodo, checkOrUnCheck, todos } = this.props
    return (
      <div className="list">
        {
          todos.map(l => {
            return <Item {...l} key={l.id} delTodo={delTodo} checkOrUnCheck={checkOrUnCheck} />
          })
        }
      </div>
    )
  }
}
