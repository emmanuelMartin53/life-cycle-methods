
import { Component } from 'react'

class MyComponent extends Component {


  constructor(props) {
    super(props)

    this.state = {
       name: "Homelander"
    }

    // console.log("Je suis dans le constructor()");

  }


  static getDerivedStateFromProps(props, state) {
    console.log("%c getDerivedStateFromProps() lancée!", "color: red; background: yellow; font-size: 15px" ) // ("%c ...", "color: red", "background: yellow","...") sert à donner un style css à un console.log
    console.log(props);
    console.log(state);

    return null
  }


  forceChange = () => {
    this.forceUpdate(() => {
      console.log("Je force le changement")
    })
  }


  shouldComponentUpdate(nextProps, nexrState) {
      console.log("Je suis dans houldComponentUpdate() ")
      return true;
  }

  render() {
    console.log("Je suis dans le render()")
    return (
      <div>
        <h1>Nom: {this.state.name}</h1>
        <p>Age: {this.props.age}</p>
        <button onClick={this.forceChange}>Forcer le changement</button>
      </div>
    )
  }
}

export default MyComponent
