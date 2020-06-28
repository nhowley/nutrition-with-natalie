import React from "react";

const DropdownSelect = ({ name, optionValue, optionText }) => (
      <option value={optionValue} name={name}>{optionText}</option>
);

export default DropdownSelect;


//  <option value="" defaultValue>{defaultText}</option>