import React, { useState } from "react";

function Sushi({sushi, handleSushi,  remainingMoney}) {

  const [isOnPlate, setIsOnPlate] = useState(false);

  
  return (
    <div className="sushi">
      <div className="plate" onClick={()=>{
        if (!isOnPlate && sushi.price <= remainingMoney) { // Check if the sushi is not already eaten and if there is enough money left to eat the sushi
          handleSushi(sushi);
          setIsOnPlate(true); // Set isOnPlate to true only if the sushi is eaten
        }
        }}>
        {/* Tell me if this sushi has been eaten! */}
        {isOnPlate ? null : (
          <img
            src={sushi.img_url}
            alt={/* Give me a name! */ "Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
