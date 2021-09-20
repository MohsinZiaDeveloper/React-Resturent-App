import React from "react";
import "./style.css";

const MenuCard = ({ menuCardData }) => {
  //   console.log(menuCardData);
  return (
    <>
      <div className="main-card--container">
        {menuCardData.map((curElem) => {
          const { id, category, name, description, image } = curElem; //this is called de-Structuring
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
