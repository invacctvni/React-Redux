import "./App.scss"
import {PlayerConsole} from "./components/PlayerConsole";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Player} from "./components/Player";
import {FavSong} from "./components/FavSong";
//react use context global state.
//store (state) => need reducer (state), action(trigger process-updating status in stores)
//Any components can access the state equally.
// http://course-data.mark2win.com/solo
function App() {
  return (
    <div className="App">
        <Routes>
            {/*<BrowserRouter></BrowserRouter>*/}
            <Route path='/' element={<PlayerConsole/>}/>
            {/*id传page3*/}
            {/*:/ default parameters*/}
            <Route path='/player/:id' element={<Player/>}/>
            {/*if page3 contains routes, you must add * after */}
            <Route path = '/favSong' element={<FavSong/>} />
        </Routes>

    </div>
  );
}

export default App;
