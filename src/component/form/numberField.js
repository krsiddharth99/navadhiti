import React from "react";

function NumberField(props) {
  const { label, key, isRequired, order, isReadonly, unit} =
    props['item'];
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label>
      <br />
      <input
        type="number"
        id={label}
        name={label}
        required={isRequired}
        readOnly={isReadonly}
        onChange={props.handleForm}
      />
      <span className="unit">{unit}</span>
      <br />
      <br />
    </div>
  );
}

export default NumberField;
