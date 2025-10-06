import { Component } from 'react'

class SimpleCompnent extends Component {
  render() {

    console.log("%c render() du composant enfant Simple !", "color: green;");
    return (
      <div>
        Bonjour
      </div>
    )
  }
}

export default SimpleCompnent
