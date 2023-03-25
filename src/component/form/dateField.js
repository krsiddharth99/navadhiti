import React from "react";

function DateField(props) {
  const { label, key, isRequired, order, isReadonly, unit } = props['item'];
  return (
    <div className="input-container">
      <label htmlFor={label}>{label}</label><br/>
      <input
        type="date"
        id={label}
        name={label}
        required={isRequired}
        readOnly={isReadonly}
        onChange={props.handleForm}
      />
      <span className="unit">{unit}</span><br/><br/>
    </div>
  );
}

export default DateField;
