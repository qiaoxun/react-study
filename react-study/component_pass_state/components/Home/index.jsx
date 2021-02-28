import React, { Component } from 'react'
import { Switch, NavLink, Route } from "react-router-dom";
import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is Home</h2>
        <div className="nav nav-tabs">
          <NavLink className="nav-link" to="/home/news">News</NavLink>
          <NavLink className="nav-link" to="/home/message">Message</NavLink>
        </div>
        <div className="tab-content">
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
          </Switch>
        </div>
      </div>
    )
  }
}
