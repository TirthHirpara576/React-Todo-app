// L45 :- useState() hook  (hooks -> useState folder -> index.jsx)
/*  
import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleINcrement = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>useState Hook!</h1>
      <br />
      <p>{count}</p>
      <button className="state-button" onClick={handleINcrement}>
        Increment
      </button>
    </div>
  );
};
*/




/* 
L46 :- useState Challenge Description
//? Create a simple React component that allows users to increment and decrement a counter using two buttons.
//? Reset Button: Add a button to reset the count to zero.
//? Limitations: Set a maximum and minimum limit for the counter and disable the buttons when those limits are reached.
//? Step Increment: Add an input field to allow users to set the step value by which the counter should increment or decrement. 
*/

import { useState } from "react";

export const CounterChallenge = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  const handleIncrement = () => {
    setCount(count + step);
  };

  const handleDecrement = () => {
    setCount(count - step);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>useState Challenge</h1>
      <p>
        Count: <span> {count} </span>
      </p>

      <div>
        <label>
          Step:
          <input
            type="number"
            // value={step} // React ma kai pan kariye --> A component is changing an uncontrolled input to an controlled component.
            onChange={(e) => setStep(Number(e.target.value))}
          />
        </label>
      </div>

      <div className="grid-three-cols">
        <button onClick={handleIncrement} disabled={count >= 100}>Increment</button>
        <button onClick={handleDecrement} disabled={count <= 0}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};




