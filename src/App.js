import React, { useState } from "react";
import DisplayComponent from "./components/DisplayComponent";
import BtnComponent from "./components/BtnComponent";
import "./App.css";

function App() {
  const [time, setTime] = useState({ s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  let updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    updatedS++;

    return setTime({ s: updatedS, m: updatedM, h: updatedH });
  };

  const start = () => {
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ s: 0, m: 0, h: 0 });
  };

  const wait = () => {
    clearInterval(interv);
    setStatus(0);
  };

  const reset = () => {
    updatedS = 0;
    updatedM = 0;
    updatedH = 0;
    clearInterval(interv);
    setStatus(1);
    setInterv(setInterval(run, 1000));
  };

  return (
    <div className="main-section">
      <div className="clock-holder">
        <div className="stopwatch">
          <DisplayComponent time={time} />
          <BtnComponent
            start={start}
            stop={stop}
            wait={wait}
            reset={reset}
            status={status}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
