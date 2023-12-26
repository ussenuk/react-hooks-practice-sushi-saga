import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({displaySushis, releaseEatenSushi, handleMoreSushi, remainingMoney}) {
  


  const sushiDisplay = displaySushis.map((item)=>{
    return (
      <Sushi
      key={item.id}
      sushi={item}
      handleSushi={releaseEatenSushi}
      remainingMoney={remainingMoney} // pass remainingMoney to Sushi

      />
    )
  })

  return (
    <div className="belt">
      { sushiDisplay }
      <MoreButton handleMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
