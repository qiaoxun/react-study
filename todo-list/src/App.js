import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

export default class App extends Component {
  
  state = {todos: [
    {id: '1', name: "吃饭", done: false},
    {id: '2', name: "睡觉", done: true},
    {id: '3', name: "打豆豆", done: false}
  ]}

  addTodo = (data) => {
    const todos = [data, ...this.state.todos]
    this.setState({todos})
  }

  delTodo = (id) => {
    const todos = this.state.todos.filter(v => {
      if (v.id === id) {
        return false
      }
      return true
    })
    this.setState({todos})
  }

  checkOrUnCheck = (id) => {
    const todos = this.state.todos
    for (let index = 0; index < todos.length; index++) {
      const element = todos[index];
      if (id === element.id) {
        element.done = !element.done
      }
      
    }
    this.setState({todos})
  }

  handleAllChecked = (checked) => {
    const todos = this.state.todos
    for (let index = 0; index < todos.length; index++) {
      const element = todos[index];
      element.done = checked
    }
    this.setState({todos})
  }

  clearAllChecked = () => {
    let todos = this.state.todos
    todos = todos.filter(todo => !todo.done)
    this.setState({todos})
  }

  render() {
    return (
      <div className="App">
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} delTodo={this.delTodo} checkOrUnCheck={this.checkOrUnCheck} />
        <Footer todos={this.state.todos} handleAllChecked={this.handleAllChecked} clearAllChecked={this.clearAllChecked} />
      </div>
    )
  }
}
