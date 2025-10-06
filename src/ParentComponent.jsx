import { Component } from 'react';
import SimpleCompnent from './SimpleCompnent';
import PureComp from './PureComponent';

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: "Vegeta"
    }
  }


  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate() decide TRUE");
    // console.log(this.state.name)
    // console.log(nextState)


    // if (this.state.name !== nextState.name) {
    //   return true
    // }
    return true
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
        <SimpleCompnent name={this.state.name}/>
        <PureComp name={this.state.name}/>
        <button onClick={this.changeToBulma}>Changer en Bulma</button>
      </div>
    )
  }
}

export default ParentComponent
