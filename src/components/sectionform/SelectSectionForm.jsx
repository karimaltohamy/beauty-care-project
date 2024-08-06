import React from "react";

const SelectSectionForm = ({
  label,
  classes = "",
  onChange,
  value,
  options,
  id,
  input = false,
  type,
  placeholderInput,
  valueInput,
  onChangeInput,
  idInput,
  required = false,
  error = false,
  needLabelHead = true,
  needLabelOption = true,
}) => {
  const direction = localStorage.getItem("direction");

  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor="">
        {" "}
        {needLabelHead && label}{" "}
        {required && <span className="text-red-500">*</span>}
      </label>
      {input && (
        <input
          type={type}
          placeholder={placeholderInput}
          value={valueInput}
          onChange={(e) => onChangeInput(e)}
          id={idInput}
        />
      )}
      <select
        value={value}
        onChange={(e) => onChange(e)}
        id={id}
        required={required}
        className={`${error ? "!border !border-red-400" : ""}`}
      >
        {needLabelOption && <option value="">{label}</option>}
        {options &&
          options.map((item, i) => (
            <option value={item?.value || item.id} key={i}>
              {item?.name}
            </option>
          ))}
      </select>
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

export default SelectSectionForm;
