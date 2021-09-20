import React, { useState, useEffect } from "react";
import "./style.css";

const UseState = () => {
  const [myNum, setmyNum] = useState(0);
  useEffect(() => {
    document.title = `chats(${myNum})`;
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          className="button2"
          onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}
        >
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

export default UseState;
