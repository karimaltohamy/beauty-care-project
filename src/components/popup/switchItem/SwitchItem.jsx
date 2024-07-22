import React from "react";

const SwitchItem = ({ label, value, onChange, classes, id = null }) => {
  return (
    <div className={`input_switch ${classes}`}>
      <div className="flex items-center gap-1">{label}</div>
      <input
        type="checkbox"
        value={value}
        checked={value}
        onChange={(e) => onChange(e.target.value)}
        id={id}
      />
      <label htmlFor={id}>Toggle</label>
    </div>
  );
};

export default SwitchItem;
