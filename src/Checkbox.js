import React, {Fragment} from "react";

const Checkbox = (props) => {
  return (
    <Fragment>
      <input
        id={props.id}
        type="checkbox"
        checked={props.isChecked}
        value={props.value}
        onChange={props.onChange}
      />
      <label>{props.value}</label>
    </Fragment>
  );
};

export default Checkbox;
