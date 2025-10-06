import { Component } from 'react'
//import LifeCycle from './LifeCycle'
import MyComponent from './MyComponent'
import './App.css'
import ParentComponent from './ParentComponent'




class App extends Component {

    render () {
      return (
        <div className="App">
          <ParentComponent />
        </div>
      )
    }
  }



export default App
