import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Games from "./components/Games";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
