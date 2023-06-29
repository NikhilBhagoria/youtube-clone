import React from "react";
import Avatar from "../avatar/Avatar";

const Card = (props) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        marginRight: "15px",
        width: "300px",
        backgroundColor: "#f5f5f5",
        marginBottom: "10px",
      }}>
      <Avatar
        image={props.image}
        style={{ borderRadius: "10px", width: "300px" }}></Avatar>
      <h4>{props.Hdata}</h4>
      <p>{props.Pdata}</p>
    </div>
  );
};

export default Card;
