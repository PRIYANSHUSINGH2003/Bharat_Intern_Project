import {Route, Navigate, Routes} from "react-router-dom";
import Home from "./components/Home";
import Room from "./components/Room";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/room/:roomID" element={<Room/>}/>
      </Routes>
    </div>
  );
}

export default App;
