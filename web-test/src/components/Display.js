import React from "react";
function Display(props) {
  return (
    <>
      <p>balls {props.balls}</p>
      <p>strikes {props.strikes}</p>
    </>
  );
}
export default Display;
