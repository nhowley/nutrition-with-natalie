import React from "react";

const Checkbox = ({ label, isSelected, onCheckboxChange, className, formClassName, labelClassName, id }) => (
  <div className= {formClassName}>
      <input
        type="checkbox"
        name={label}
        checked={isSelected}
        onChange={onCheckboxChange}
        className={className}
        id={id}
      />      
      <label className={labelClassName} htmlFor={id}>{label}</label>
  </div>
);

export default Checkbox;