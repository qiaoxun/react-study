import './App.css'
import React,{Component} from 'react'
import Hello from './components/Hello/Hello'

class App extends Component {
  render() {
    return (
      <div className="bg-green">
        <Hello />
      </div>
    );
  }
}

export default App
