import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./screens/mobile/Home/Home";
import ProductPage from "./screens/mobile/productPage";
import ROUTES from "./helpers/routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
