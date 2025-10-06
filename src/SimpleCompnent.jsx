import { Component } from 'react'

class SimpleCompnent extends Component {
  render() {

    console.log("%c render() du composant enfant Simple !", "color: green;");
    return (
      <div>
        <p>
          <span className='green'>SimpleComponent: </span>
          {this.props.name}
        </p>
      </div>
    )
  }
}

export default SimpleCompnent
