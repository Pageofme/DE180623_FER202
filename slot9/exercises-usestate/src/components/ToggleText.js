import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <p className="text-white mt-3">Toggle me!</p>}
    </div>
  );
}

export default ToggleText;
