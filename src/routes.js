import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Sobremim from "./pages/Sobremim";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import DefaultPage from "components/DeafultPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<Sobremim />} />
        </Route>

        {/* 

          ROTAS ANINHADAS:
          Na rota "/", a estrutura a ser renderizada é:

          <DefaultPage>
            <Inicio />
          </DefaultPage>

          Na rota "/sobremim", a estrutura a ser renderizada é:

          <DefaultPage>
            <Sobremim />
          </DefaultPage>
        
        
        */}


        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default AppRoutes;
