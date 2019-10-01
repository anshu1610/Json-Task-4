import React from "react";

const Card = ({ props, child }) => {
  return (
    <div style={props}>
      <label>{props.label}</label>
      {child}
    </div>
  );
};

export default Card;
