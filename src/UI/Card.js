import React from "react";

function Card(props) {
  const cardClass = `card  ${props.className}`;
  return <div className={cardClass}>{props.children}</div>;
}

export default Card;
