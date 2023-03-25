import React from "react";

function DropdownField(props) {
  const { label, key, isRequired, order, isReadonly, items } = props['item'];
  return (
    <div>
      <label htmlFor={label}>{label}</label><br/>
      <select name={label} id={label} required={isRequired} onChange={props.handleForm}>
        {items.map((element,idx) => (
          <option key={idx} value={element["value"]}>{element["text"]}</option>
        ))}
      </select><br/><br/>
    </div>
  );
}

export default DropdownField;
