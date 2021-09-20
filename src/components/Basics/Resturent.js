import React, { useState } from "react";
// import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./menuCard";
import Navbar from "./Navbar";
import "./style.css";

const uniqueList = [
  ...new Set( //new set romove repeated value and make them unique and three dots it know as spread Operator
    Menu.map((curEle) => {
      return curEle.category;
    })
  ),
  "All",
];
// console.log(uniqueList);

const Resturent = () => {
  const [meunData, setmenuData] = useState(Menu);
  const [menuList, setenuList] = useState(uniqueList);

  const filterItems = (category) => {
    if (category === "All") {
      setmenuData(Menu);
      return;
    }
    const updatedList = Menu.filter((curElement) => {
      return curElement.category === category;
    });
    setmenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItems={filterItems} menuList={menuList} />
      <MenuCard menuCardData={meunData} />
    </>
  );
};

export default Resturent;
