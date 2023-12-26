import React from "react";

function Table({ plates = [], sushiEaten , remainingMoney }) {
  // renders an empty plate for every element in the array


  const emptyPlates = sushiEaten.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));




  return (
    <>
      <h1 className="remaining">
        You have: ${remainingMoney >= 0 ? remainingMoney : 0} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
