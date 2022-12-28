import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./ProjectoFinal/Home/Home";
import ProductList from "./ProjectoFinal/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/ProductList" element={<ProductList />}></Route>
      </Routes>
    </div>
  );
}

export default App;
