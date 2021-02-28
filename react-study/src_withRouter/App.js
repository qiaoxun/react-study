import './App.css'
import './bootstrap.min.css'
import React,{Component} from 'react'
import About from './components/About'
import Home from './components/Home'
import { Switch, NavLink, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3">
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/home">Home</NavLink>
        </div>
        <div className="tab-content">
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App)
