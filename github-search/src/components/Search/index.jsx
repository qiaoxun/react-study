import React, { Component } from 'react'

export default class index extends Component {

  search = () => {
    this.props.search(this.keywordEle.value)
  }

  render() {
    return (
      <div>
        <div className="search">
          <p>Search By Github Users</p>
          <input ref={c => this.keywordEle = c} type="text" placeholder="Input name to search" />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }
}
