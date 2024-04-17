import {BrowserRouter,Routes, Route} from "react-router-dom";
import './App.css';
import Games from "./Games";
import Query from "./Query";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/game" element={<Games />} />
        <Route path="/game/:year" element={<Games />} />
        <Route path="/query" element={<Query />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;