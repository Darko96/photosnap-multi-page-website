import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Stories from "./pages/Stories";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route path="stories" element={<Stories></Stories>}></Route>
        <Route path="features" element={<Features></Features>}></Route>
        <Route path="pricing" element={<Pricing></Pricing>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
