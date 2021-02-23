import './App.css'
import './bootstrap.min.css'
import React,{Component} from 'react'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <ul className="nav nav-pills mb-3">
            <li className="nav-item">
              {/* <Link className="nav-link active" to="/about">About</Link> */}
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/home">Home</Link> */}
              <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App
