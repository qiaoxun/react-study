import React, { Component } from 'react'
import store from '../../redux/store'

export default class index extends Component {

  // state = {count: 0}

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  increment = () => {
    store.dispatch({type: 'increment', data: Number(this.selectNumber.value)})
  }
  decrement = () => {
    store.dispatch({type: 'decrement', data: Number(this.selectNumber.value)})
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
        <h3>Currently, Total Number: {store.getState()}</h3>
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
