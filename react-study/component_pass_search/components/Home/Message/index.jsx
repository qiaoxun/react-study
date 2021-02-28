import React, { Component } from 'react'
import { Switch, NavLink, Route } from "react-router-dom";
import Detail from './Detail'

export default class index extends Component {
  render() {
    const messageList = [{ id: '01', title: 'Msg1' }, { id: '02', title: 'Msg2' }, { id: '03', title: 'Msg3' }]
    return (
      <div>
        Message
        <ul>
        {
          messageList.map(message => {
            return (
              <li key={message.id}><NavLink className="nav-link" to={'/home/message?id=' + message.id}>{message.title}</NavLink></li>
            )
          })
        }
        </ul>
        <Route path="/home/message" component={Detail} />
      </div>
    )
  }
}
