
import { PureComponent } from 'react'


class PureComp extends PureComponent {
  render() {
    console.log("%c render() du PureComponent enfant simple !","color: violet")
    return (
      <div>
        <p>
          <span className='violet'>PureComponent: </span>
           {this.props.name}
        </p>
      </div>
    )
  }
}

export default PureComp
