import React, { Component } from 'react'

export default class index extends Component {

  state = {count: 0}

  increment = () => {
    this.setState({ count: this.state.count + Number(this.selectNumber.value) })
  }
  decrement = () => {
    this.setState({ count: this.state.count - Number(this.selectNumber.value) })
  }
  incrementIfOdd = () => {
    if (this.state.count % 2 === 1) {
      this.increment()
    }
  }
  incrementAsync = () => {
    setTimeout(this.increment, 500)
  }

  render() {
    return (
      <div>
        <h3>Currently, Total Number: {this.state.count}</h3>
        <select ref={c => this.selectNumber = c}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    )
  }
}
