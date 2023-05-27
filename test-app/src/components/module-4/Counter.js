import { useState } from "react";
import ResetButton from "./ResetButton";
import css from "./Counter.module.css";

const Counter = () => {
  const [value, setValue] = useState(0);

  return (
    <div className={css.cardWrap}>
      {value}
      <button type="button" onClick={() => setValue(value + 1)}>
        Increment value by 1
      </button>
      <ResetButton resetValue={setValue} resBtnName="Reset value" />
    </div>
  );
};

export default Counter;