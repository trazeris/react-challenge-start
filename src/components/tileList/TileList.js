import React from "react";
import {Tile} from "../tile/Tile";

export const TileList = ({array}) => {
  return (
    <div>
      {array.map((value, index) => {
        return <Tile object={value}/>
      })}
    </div>
  );
};
