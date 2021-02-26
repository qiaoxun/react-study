import './App.css'
import './bootstrap.min.css'
import React,{Component} from 'react'
import About from './components/About'
import Home from './components/Home'
import Test from './components/Test'
import { Switch, NavLink, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <ul className="nav nav-pills mb-3">
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/about">About</Link> */}
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/home">Home</Link> */}
              <NavLink className="nav-link" to="/home/a/b">Home</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" exact={true} component={Home} />
            <Route path="/home" component={Test} />
            <Redirect to="/about" />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App
