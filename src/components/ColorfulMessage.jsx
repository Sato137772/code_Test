import React from "react";

export const ColorfulMessage = (props) => {
  const { color, chiledren } = props;
  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{chiledren}</p>;
};
