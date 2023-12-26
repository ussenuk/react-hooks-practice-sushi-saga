import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([]);
  const [sushiEaten, setSushiEaten] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [remainingMoney, setRemainingMoney] = useState(100); //initial amount of money


  useEffect(()=>{
    fetch(API)
      .then((r)=>r.json())
      .then(data => setSushis(data))

  }, []);

  function releaseEatenSushi(sushi){
    const newEatenSushi = sushiEaten.find((sh)=> sh.id === sushi.id)


  // Check if the sushi is not already eaten and if there is enough money left to eat the sushi
  if (!newEatenSushi && sushi.price <= remainingMoney) {
    setSushiEaten([...sushiEaten, sushi]);
    setRemainingMoney(remainingMoney - sushi.price); // Deduct the price of the eaten sushi

    
  }

}

  function handleMoreSushi() { 
    setCurrentIndex((currentIndex) => currentIndex + 4);
  }

  const displaySushis = sushis.slice(currentIndex, currentIndex + 4); // Add this line

  

  return (
    <div className="app">
      <SushiContainer displaySushis={displaySushis}  releaseEatenSushi={releaseEatenSushi} handleMoreSushi={handleMoreSushi} remainingMoney={remainingMoney}/>
      <Table sushiEaten={sushiEaten} remainingMoney={remainingMoney}/>
    </div>
  );
}

export default App;
