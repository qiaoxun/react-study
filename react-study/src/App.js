import './App.css'
import './bootstrap.min.css'
import React,{Component} from 'react'
import Count from './components/Count'
// import { Switch, NavLink, Route, withRouter } from "react-router-dom";

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="d-flex align-items-start">
        <Count />
      </div>
    );
  }
}

// export default withRouter(App)
export default App

