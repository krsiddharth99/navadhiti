import React from "react";

function TextField(props) {
  const { label, key, isRequired, order, isReadonly,handleForm } = props['item'];
  return (
    <div>
      <label htmlFor={label}>{label}</label><br/>
      <input
        type="text"
        id={label}
        name={label}
        required={isRequired}
        readOnly={isReadonly}
        onChange={props.handleForm}
      />
      <br /><br/>
    </div>
  );
}

export default TextField;
