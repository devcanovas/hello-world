import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";
import Menu from "./components/Menu";
import Footer from "components/Footer";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<Sobremim />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default AppRoutes;
