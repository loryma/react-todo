import React from "react";

import Checkbox from "../Checkbox/Checkbox";

import classes from "./CheckAll.module.css";

const CheckAll = ({ checked, onChange }) => {
  return (
    <label className={classes.CheckAll}>
      <span className={classes.Checkbox}>
        <Checkbox checked={checked} onChange={onChange} />
      </span>
      Check all
    </label>
  );
};

export default CheckAll;
