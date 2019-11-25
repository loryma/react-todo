import React, { useContext } from "react";
import NewListContext from "../../store/context/NewListContext";
import classes from "./NewList.module.css";

const NewList = () => {
  const dispatchToggleNewList = useContext(NewListContext);

  const onClick = () => {
    dispatchToggleNewList({ type: "TOGGLE_CREATE_LIST" });
  };

  return (
    <button className={classes.NewList} type="button" onClick={onClick}>
      New List
    </button>
  );
};

export default NewList;
