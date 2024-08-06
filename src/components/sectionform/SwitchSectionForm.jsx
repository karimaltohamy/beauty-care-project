import React from "react";


const SwitchSectionForm = ({
  label,
  classes = "",
  onChange,
  value,
  options,
  id,
  required,
  error,
}) => {
  const direction = localStorage.getItem("direction");

  return (
    <div className={`input_switch ${classes}`}>
      <div className="flex items-center gap-1 font-semibold">
        {label} {required && <span className="text-red-500">*</span>}
      </div>
      <input
        type="checkbox"
        value={value}
        checked={value}
        onChange={(e) => onChange(e)}
        id={id}
      />
      <label htmlFor={id}>Toggle</label>
      {error && (
        <span
          className={`text-red-500 error ${
            direction == "rtl" ? "!left-0" : "!right-0"
          }`}
        >
          {label} Can't be empty
        </span>
      )}
    </div>
  );
};

export default SwitchSectionForm;
