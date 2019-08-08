import React, { useState } from "react";
import Display from "./Display";
function Dashboard(props) {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const ballsIncrement = () => {
    if (balls < 4) {
      setBalls(balls + 1);
    } else {
      setBalls(0);
    }
  };
  const strikesIncrement = () => {
    if (strikes < 3) {
      setStrikes(strikes + 1);
    } else {
      setStrikes(0);
    }
  };
  const foulsIncrement = () => {
    if (strikes === 0) {
      setStrikes(1);
    } else if (strikes === 1) {
      setStrikes(2);
    } else {
      setStrikes(strikes);
    }
  };
  const hitsIncrement = () => {
    setBalls(0);
    setStrikes(0);
  };
  return (
    <>
      <button onClick={() => strikesIncrement()}>Strike</button>
      <button onClick={() => ballsIncrement()}>Ball</button>
      <button onClick={() => foulsIncrement()}>Foul</button>
      <button onClick={() => hitsIncrement()}>Hit</button>
      <Display
        balls={balls}
        setBalls={setBalls}
        strikes={strikes}
        setStrikes={setStrikes}
      />
    </>
  );
}
export default Dashboard;
