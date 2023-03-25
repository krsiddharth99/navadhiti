import React from "react";
import DateField from "./form/dateField";
import DropdownField from "./form/dropdownField";
import NumberField from "./form/numberField";
import TextField from "./form/textField";

function InputField(props) {
  const { item, handleForm } = props;
  switch (item["type"]) {
    case "text":
      return <TextField item={item} handleForm={handleForm} />;
    case "number":
      return <NumberField item={item} handleForm={handleForm} />;
    case "dropdown":
      return <DropdownField item={item} handleForm={handleForm} />;
    case "date":
      return <DateField item={item} handleForm={handleForm} />;
    default:
      return <h1>Coming Soon....</h1>;
  }
}

export default InputField;
