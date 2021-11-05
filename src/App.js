import React from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = React.useState(0);
  const timer = React.useRef(null);

  const inscrease = (hasToIncrease) => {
    timer.current = setInterval(
      () => setCounter((prev) => prev + (!hasToIncrease ? -1 : +1)),
      150
    );
  };

  function timeoutClear() {
    clearInterval(timer.current);
  }
  return (
    <div className="wrapper">
      <div>
        <button
          onMouseLeave={timeoutClear}
          onMouseUp={timeoutClear}
          onMouseDown={() => inscrease(false)}
          onTouchStart={() => inscrease(false)}
          onTouchEnd={timeoutClear}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <input
          type="number"
          min="0"
          value={counter >= 0 && counter}
          onChange={(e) => setCounter(parseInt(e.target.value))}
        />
        <button
          onMouseLeave={timeoutClear}
          onMouseUp={timeoutClear}
          onMouseDown={inscrease}
          onTouchStart={inscrease}
          onTouchEnd={timeoutClear}
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default App;
