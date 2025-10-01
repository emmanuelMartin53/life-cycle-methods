import { Component } from 'react'
import LifeCycle from './LifeCycle'
import './App.css'

class App extends Component {

  state = {
    display: true
  }

  showOrRemove = () => {

      this.setState({
        display: !this.state.display
      })

  }



  render () {


    const showComponent = this.state.display  ? (<LifeCycle name="Tata" />) : (<div></div>);


    return (
      <div className='App'>
        {showComponent}

        <button onClick={this.showOrRemove}>Cliquez ici</button>
      </div>
    )
  }

}

export default App
