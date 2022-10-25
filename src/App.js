import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ShoppingList from "./pages/ShoppingList";
import Home from "./pages/Home";

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
