import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/Register";
import LoginPage from "./pages/Login";

function App() {
  return (
    // Minhas rotas
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
