import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/mobile/Home/Home";
import ProductPage from "./screens/mobile/productPage";
import ROUTES from "./helpers/routes";

function App() {
  // const isMobileDevice = useMediaQuery({
  //   query: "(min-device-width: 480px)",
  // });

  // const isBigScreen = useMediaQuery({
  //   query: "(min-device-width: 768px)",
  // });

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
