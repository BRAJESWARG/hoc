import './App.css';
import React from "react";
import ClickCounter from "./components/HOC/clickCounter";
import RightClickCounter from "./components/HOC/rightClickCounter";
import MouseOverCounter from "./components/HOC/mouseOverCounter";


function App() {
  return (
    <div className="App">
      <ClickCounter />
      <MouseOverCounter />
      <RightClickCounter />
    </div>
  );
}

export default App;
