import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider"; // Gerenciamento global do tema
import "./styles/Animations.css";

import Home from "./pages/Home";
import RegisterPage from "./pages/auth/CadastroUsuario";
import LoginPage from "./pages/auth/Login";
import CandidatosPage from "./pages/landing/ParaCandidatos";
import EmpresasPage from "./pages/landing/ParaEmpresas";
import SobrePage from "./pages/landing/SobreNos";
import TermsPage from "./pages/institucional/TermosDeServico";
import ServicesPage from "./pages/institucional/PoliticaDePrivacidade";
import ForgotPasswordPage from "./pages/auth/RecuperarSenha";
import ContatoPage from "./pages/institucional/Contato";
import NotFoundPage from "./pages/NotFound";

import CandidateDashboard from "./pages/candidato/PainelCandidato";
import TestsPage from "./pages/candidato/TestesCandidato";
import ProfilePage from "./pages/candidato/PerfilCandidato";
import JobsPage from "./pages/candidato/VagasCompativeisCandidato";
import AvaliationPage from "./pages/candidato/AvaliacoesCandidato";
import SavedJobsPage from "./pages/candidato/VagasSalvasCandidato";
import ConfigsCandidatePage from "./pages/candidato/ConfiguracoesCandidato";

import CompanyDashboard from "./pages/empresa/PainelEmpresa";
import VagasEmpresaPage from "./pages/empresa/GerenciarVagasEmpresa";
import MensagesCompanyPage from "./pages/empresa/MensagensEmpresa";
import AnalisesPage from "./pages/empresa/EstatisticasEmpresa";
import ConfigsEmpresaPage from "./pages/empresa/ConfiguracoesEmpresa";

import ProfileCompletionPage from "./pages/auth/FinalizarPerfil";

function App() {
  return (
    // Envolvendo as rotas com o ThemeProvider para gerenciamento global do tema
    <ThemeProvider>
      <Routes>
        {/* Páginas Gerais */}
        <Route path="/" element={<Home />} />

        {/* Páginas de Autenticação */}
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/recuperar-senha" element={<ForgotPasswordPage />} />
        <Route path="/completar-perfil" element={<ProfileCompletionPage />} />

        {/* Páginas de Apresentação (Landing) */}
        <Route path="/para-candidatos" element={<CandidatosPage />} />
        <Route path="/para-empresas" element={<EmpresasPage />} />
        <Route path="/sobre-nos" element={<SobrePage />} />

        {/* Páginas Institucionais */}
        <Route path="/termos" element={<TermsPage />} />
        <Route path="/politica-de-privacidade" element={<ServicesPage />} />
        <Route path="/contato" element={<ContatoPage />} />

        {/* Dashboard Candidato */}
        <Route path="/dashboard/candidato" element={<CandidateDashboard />} />
        <Route path="/dashboard/candidato/perfil" element={<ProfilePage />} />
        <Route path="/dashboard/candidato/vagas" element={<JobsPage />} />
        <Route
          path="/dashboard/candidato/avaliacoes"
          element={<AvaliationPage />}
        />
        <Route
          path="/dashboard/candidato/vagas-salvas"
          element={<SavedJobsPage />}
        />
        <Route
          path="/dashboard/candidato/configuracoes"
          element={<ConfigsCandidatePage />}
        />
        <Route path="/dashboard/candidato/testes" element={<TestsPage />} />

        {/* Dashboard Empresa */}
        <Route path="/dashboard/empresa" element={<CompanyDashboard />} />
        <Route
          path="/dashboard/empresa/gerenciar-vagas"
          element={<VagasEmpresaPage />}
        />
        <Route
          path="/dashboard/empresa/mensagens"
          element={<MensagesCompanyPage />}
        />
        <Route path="/dashboard/empresa/analises" element={<AnalisesPage />} />
        <Route
          path="/dashboard/empresa/configuracoes"
          element={<ConfigsEmpresaPage />}
        />

        {/* Rota curinga para páginas não encontradas */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
