import React from "react";
import test from "./services/Socket";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={test}>Test</button>
    </div>
  );
}

export default App;
