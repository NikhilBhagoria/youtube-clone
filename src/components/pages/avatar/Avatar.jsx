import React from "react";

const Avatar = (props) => {
  return <img src={props.image} alt={props.alt} style={props.style}></img>;
};

export default Avatar;
