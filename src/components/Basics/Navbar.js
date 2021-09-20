import React from "react";
import "./style.css";

const Navbar = ({ filterItems, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {menuList.map((categoryname) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItems(categoryname)}
              >
                {categoryname}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
