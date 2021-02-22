import './App.css'
import React,{Component} from 'react'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="bg-green">
        <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
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
