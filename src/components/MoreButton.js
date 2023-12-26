import React from "react";

function MoreButton({handleMoreSushi}) {
  return <button onClick={handleMoreSushi}>More sushi!</button>;// Call handleMoreSushi when button is clicked
}

export default MoreButton;
