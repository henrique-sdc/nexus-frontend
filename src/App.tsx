import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider"; // Modo Dark
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
import CandidateDashboard from "./pages/DashboardCandidato";
import TestsPage from "./pages/TestePage";
import CompanyPage from "./pages/DashboardEmpresa";
import ProfileCompletionPage from "./pages/ConclusaoPerfil";
import ProfilePage from "./pages/MeuPerfilCandidato";
import JobsPage from "./pages/VagasCompativeis";
import AvaliationPage from "./pages/Avaliacoes";
import SavedJobsPage from "./pages/VagasSalvas";
import ConfigsCandidatePage from "./pages/ConfigsCandidato";

function App() {
  return (
    // Envolvendo as rotas com o ThemeProvider para gerenciamento global do tema
    <ThemeProvider>
      {/* Minhas rotas */}
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
        <Route path="/dashboard/candidato" element={<CandidateDashboard />} />
        <Route path="/dashboard/empresa" element={<CompanyPage />} />
        <Route path="/tests" element={<TestsPage />} />
        <Route path="/complete-profile" element={<ProfileCompletionPage />} />
        <Route path="/dashboard/candidato/perfil" element={<ProfilePage />} />
        <Route path="/dashboard/candidato/vagas" element={<JobsPage />} />
        <Route
          path="/dashboard/candidato/avaliacoes"
          element={<AvaliationPage />}
        />
        <Route path="/dashboard/candidato/salvas" element={<SavedJobsPage />} />
        <Route
          path="/dashboard/candidato/configuracoes"
          element={<ConfigsCandidatePage />}
        />
        {/* Rota curinga para páginas não encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
