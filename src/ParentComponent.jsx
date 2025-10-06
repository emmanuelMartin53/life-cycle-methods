import { Component } from 'react';
import SimpleCompnent from './SimpleCompnent';
import PureComp from './PureComponent';
import FunctionComp from './FunctionComp';
import Button from './ButtonComp';

class ParentComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
       name: "Vegeta"
    }
  }


  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("shouldComponentUpdate() decide TRUE");
  //   // console.log(this.state.name)
  //   // console.log(nextState)


  //   // if (this.state.name !== nextState.name) {
  //   //   return true
  //   // }
  //   return true
  // }

  changeToBulma = () => {
    this.setState({
      name: "Bulma"
    })
  }

  render() {

    console.log("%c RENDER() DU COMPOSANT PARENT", "color: blue;");

    return (
      <div>
        <p>
          <span className="blue">ParentComponent: </span>
          {this.state.name}
        </p>

        <SimpleCompnent name={this.state.name}/>
        <PureComp name={this.state.name}/>
        <FunctionComp name={this.state.name}/>
        <Button changeBulma={this.changeToBulma} />
      </div>
    )
  }
}

export default ParentComponent
