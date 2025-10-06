import { memo } from "react";
const Button = ({changeBulma}) => {

  return (
    <div>
      <button onClick={changeBulma}>Changer en Bulma</button>
    </div>
  )

}

export default memo(Button);
