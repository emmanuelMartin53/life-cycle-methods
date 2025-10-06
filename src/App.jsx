import { Component } from 'react'
//import LifeCycle from './LifeCycle'
import MyComponent from './MyComponent'
import './App.css'
import ParentComponent from './ParentComponent'

// class App extends Component {

//   state = {
//     display: true
//   }

//   showOrRemove = () => {

//       this.setState({
//         display: !this.state.display
//       })

//   }


//   render () {

//     const showComponent = this.state.display  ? (<LifeCycle name="Tata" />) : (<div></div>);


//     return (
//       <div className='App'>
//         {showComponent}

//         <button onClick={this.showOrRemove}>Cliquez ici</button>
//       </div>
//     )
//   }

// }


class App extends Component {

    // state = {
    //   age: 30
    // }

    // addOneYear = () => {
    //     this.setState((prevState) => ({
    //       age: prevState.age + 1
    //     })
    //  )
    // }

    // render () {

    //   return (
    //     <div className="App">
    //       <MyComponent age={this.state.age}/>
    //       <button onClick={this.addOneYear}>Changer le props</button>
    //     </div>
    //   );
    // }

    render () {
      return (
        <div className="App">
          <ParentComponent />
        </div>
      )
    }
  }



export default App
