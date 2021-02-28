import React, { Component } from 'react'
import qs from 'querystring'

const messages = [
  { id: '01', content: 'To help fit your needs, this works with <ul>-based markup, as shown above, or with any arbitrary “roll your own” markup. ' },
  { id: '02', content: 'Note that if you’re using <nav>, you shouldn’t add role="tablist" directly to it, as this would override the element’s native role as a navigation landmark.' },
  { id: '03', content: 'Instead, switch to an alternative element (in the example below, a simple <div>) and wrap the <nav> around it.' },
]

export default class index extends Component {
  render() {
    console.log(this.props)
    const id = this.props.location.state ? this.props.location.state.id : ''
    let msg = messages.find(ele => ele.id === id)
    if (!msg) {
      msg = {
        id: '',
        content: ''
      }
    }
    return (
      <div>
        {msg.content}
      </div>
    )
  }
}
