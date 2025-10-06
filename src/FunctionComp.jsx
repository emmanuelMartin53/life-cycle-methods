
import { memo } from "react";

const FunctionComp = ({name}) => {

  console.log("%c render() du FunctionComponent enfant simple !","color: purple")

  return (
    <div>
       <p>
          <span className='purple'>FunctionComponent: </span>
           {name}
        </p>
    </div>
  )
}

export default memo(FunctionComp);
