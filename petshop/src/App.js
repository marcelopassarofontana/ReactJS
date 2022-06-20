import "./App.css";
import Home from "./Paginas/Home";
import Sobre from "./Paginas/Sobre";
import "./assets/css/base/base.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sobre" element={<Sobre></Sobre>}></Route>
        <Route exact path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
