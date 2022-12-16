import React from "react";

export const Tile = ({object}) => {
  return (
    <div className="tile-container">
      {Object.keys(object).map((key, index) => {
        return <p className={index === 0 ? 'tile-title' : 'tile'}>{key}: {object[key]}</p>
      })}
    </div>
  );
};
