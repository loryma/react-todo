import React from "react";
import classes from "./Checkbox.module.css";

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className={classes.Checkbox}>
      <input
        className={classes.Input}
        type="checkbox"
        onChange={onChange}
        checked={checked}
      />
      <span className={classes.Check}></span>
    </label>
  );
};

export default Checkbox;
