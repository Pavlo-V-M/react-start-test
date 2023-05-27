// -------------------------------------------------

// import { useState, useEffect } from "react";
// import ResetButton from "./ResetButton";

// const CounterThird = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log(value);
//     console.log("Updating phase: same when componentDidUpdate runs");
//   }, [value]);

//   return (
    
//     <div>
//       <button onClick={() => setValue(value + 1)}>{value}</button>
//       <ResetButton resetValue={setValue} resBtnName="Reset" />
      
//     </div>
    
//   );

// };

// export default CounterThird;

// -------------------------------------------------

import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import css from "./Counter.module.css";

const CounterThird = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log(firstValue + secondValue);
  }, [firstValue, secondValue]);

  return (
    
    <div className={css.cardWrap}>
      <button onClick={() => setFirstValue(firstValue + 1)}>First: {firstValue}</button>
      <ResetButton resetValue={setFirstValue} resBtnName="Reset First" />

      <button onClick={() => setSecondValue(secondValue + 1)}>Second: {secondValue}</button>
      <ResetButton resetValue={setSecondValue} resBtnName="Reset Second" />
    </div>
    
  );

};

export default CounterThird;

// -------------------------------------------------------------------

// import { useEffect } from "react";
// const CounterThird = () => {
//   useEffect(() => {
//     console.log("Mounting phase: same when componentDidMount runs");

//     return () => {
//       console.log("Unmounting phase: same when componentWillUnmount runs");
//     };
//   }, []);

//   return null;
// };

// export default CounterThird;

// ----------------------------------------------------------------
