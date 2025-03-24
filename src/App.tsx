import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styles/Animations.css";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";
import CandidatosPage from "./pages/Candidatos";
import EmpresasPage from "./pages/Empresas";
import SobrePage from "./pages/Sobre";
import TermsPage from "./pages/TermosDeServico";
import ServicesPage from "./pages/PoliticaDePrivacidade";
import ForgotPasswordPage from "./pages/ForgotPassword";
import ContatoPage from "./pages/Contato";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    // Minhas rotas
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/candidatos" element={<CandidatosPage />} />
      <Route path="/empresas" element={<EmpresasPage />} />
      <Route path="/sobre" element={<SobrePage />} />
      <Route path="/termos" element={<TermsPage />} />
      <Route path="/politica-de-privacidade" element={<ServicesPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/contato" element={<ContatoPage />} />
      {/* Rota curinga para páginas não encontradas */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
