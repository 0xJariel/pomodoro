import React from "react";

function TimerControls({ isRunning, handleStart, handlePause, handleReset }) {
  return (
    <section>
      {!isRunning ? (
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
      ) : (
        <button onClick={handlePause}>Pause</button>
      )}
    </section>
  );
}

export default TimerControls;
