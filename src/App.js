import "./App.scss"
import {PlayerConsole} from "./components/PlayerConsole";
import {useState} from "react";
//react use context global state.
//store (state) => need reducer (state), action(trigger process-updating status in stores)
//Any components can access the state equally.
// http://course-data.mark2win.com/solo
function App() {
  return (
    <div className="App">
      <button></button>
      <PlayerConsole/>
    </div>
  );
}

export default App;
