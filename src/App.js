import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import ShoppingList from "../src/components/ShoppingList";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<ShoppingList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
