import React, { useState } from "react";
import styles from "./Counter.module.css";
import { IconMinus } from "../assets/icons/IconMinus";
import { IconAdd } from "../assets/icons/IconAdd";

const Counter = ({ text, count }) => {
  const [counter, setCounter] = useState(count);
  const handleIncrement = () => {
    setCounter((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (counter <= 0) {
      return;
    }
    setCounter((prev) => prev - 1);
  };
  return (
    <>
      <div className={styles.row}>
        <p>
          {counter} {text}
        </p>

        <IconMinus onClick={handleDecrement} />
        <IconAdd onClick={handleIncrement} />
      </div>
    </>
  );
};

export default Counter;
