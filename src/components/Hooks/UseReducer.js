import React, { useState, useEffect, useReducer } from "react";
import "./style.css";

const reducer = (state, action) => {
  if (action.type === "incr") {
    state = state + 1;
  }
  if (state > 0 && action.type === "decr") {
    state = state - 1;
  }
  return state;
};

const UseReducer = () => {
  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="center_div">
        <p>{state}</p>
        <div className="button2" onClick={() => dispatch({ type: "incr" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div className="button2" onClick={() => dispatch({ type: "decr" })}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DEC
        </div>
      </div>
    </>
  );
};

export default UseReducer;
