import { Component } from 'react';
import SimpleCompnent from './SimpleCompnent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: "Vegeta"
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("je suis dans  shouldComponentUpdate()");
    console.log(this.state.name)
    console.log(nextState)


    if (this.state.name !== nextState.name) {
      return true
    }
    return false
  }

  changeToBulma = () => {
    this.setState({
      name: "Bulma"
    })
  }

  render() {

    console.log("%c RENDER() DU COMPOSANT PARENT", "color: blue;");

    return (
      <div>
        <SimpleCompnent />
        <button onClick={this.changeToBulma}>Changer en Bulma</button>
      </div>
    )
  }
}

export default ParentComponent
