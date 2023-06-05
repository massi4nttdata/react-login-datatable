import React, { useEffect, useState } from "react";
const Headers = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    console.log("I:" + count);
    setCount(count + 1);
    console.log("O:" + count);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>
    </div>
  );
};
export default Headers;
