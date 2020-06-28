import React from "react";

const TextArea = ({ labelClassName, id, rows, className, handleChange, placeholder, labelText, textAreaClassName, handleKeyPress}) => (
 <div className={className}>
    <label className={labelClassName} htmlFor={id}>
      {labelText}
    </label>
    <textarea
    rows={rows}
    className={textAreaClassName} 
    id={id}
    name={id}
    onChange={handleChange} 
    placeholder={placeholder}
    onKeyPress={handleKeyPress}
    />
  </div>
);

export default TextArea;