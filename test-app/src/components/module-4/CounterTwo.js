import { useState, useEffect } from "react";
import ResetButton from "./ResetButton";
import css from "./Counter.module.css";

const CounterTwo = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`;
  });

  return (
    <div className={css.cardWrap}>
      <p>You clicked {value} times</p>
      <button onClick={() => setValue(value + 1)}>Click me</button>
      <ResetButton resetValue={setValue} />
    </div>
  );
};

export default CounterTwo;