const InputSectionForm = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes = "",
  id,
  required = false,
  error = false,
  pattern = "",
}) => {
  const direction = localStorage.getItem("direction");
  return (
    <div className={`input_item ${classes}`}>
      <label htmlFor="">
        {" "}
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        id={id}
        required={required}
        disabled={classes && classes.includes("disabled")}
        className={`${error ? "!border !border-red-400" : ""}`}
        pattern={pattern}
      />
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

export default InputSectionForm;
