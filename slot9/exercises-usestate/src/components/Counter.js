import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h2 className="text-white">Count: {count}</h2>
    </div>
  );
}

export default Counter;
