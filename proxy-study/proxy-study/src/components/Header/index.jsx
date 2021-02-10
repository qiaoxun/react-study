import React, { Component } from 'react'

export default class index extends Component {

  handleKeyUp = (event) => {
    const {target, keyCode} = event
    if (keyCode === 13) {
      const name = target.value
      this.props.addTodo({name, id: new Date().getTime(), done: false})
      target.value = ''
    }
  }

  render() {
    return (
      <div>
        <input onKeyUp={this.handleKeyUp} className="enter-input" type="text" placeholder="Please input task name and press enter" />
      </div>
    )
  }
}
