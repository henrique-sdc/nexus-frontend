import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "src/components/ui/button";
import ModeToggle from "src/components/DarkMode/ModeToggle";

const NavBar = () => {
  // State para controlar a abertura do menu mobile
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Classes para links ativos e inativos
  const activeClasses =
    "text-black dark:text-white text-sm font-medium transition-colors";
  const inactiveClasses =
    "text-sm font-medium text-gray-500 dark:text-gray-300 transition-colors hover:text-black dark:hover:text-white";

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white dark:border-black 
      bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 
      dark:bg-black/90 dark:backdrop-blur dark:supports-[backdrop-filter]:bg-black/80"
    >
      {/* Container principal da NavBar */}
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo e nome da marca */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          <span className="text-xl font-bold dark:text-white">Nexus</span>
        </NavLink>

        {/* Navegação principal (visível apenas em telas médias ou maiores) */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClasses : inactiveClasses
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/candidatos"
            className={({ isActive }) =>
              isActive ? activeClasses : inactiveClasses
            }
          >
            Para Candidatos
          </NavLink>
          <NavLink
            to="/empresas"
            className={({ isActive }) =>
              isActive ? activeClasses : inactiveClasses
            }
          >
            Para Empresas
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive ? activeClasses : inactiveClasses
            }
          >
            Sobre
          </NavLink>
        </nav>

        {/* Seção direita: Botão de troca de modo e links de autenticação */}
        <div className="flex items-center gap-4 dark:text-white">
          {/* Botão para alternar o modo (claro/escuro) */}
          <div className="hover:text-gray-200 dark:hover:text-zinc-900 transition-all duration-100">
            <ModeToggle />
          </div>
          {/* Botões de "Entrar" e "Cadastre-se" para desktop */}
          <div className="hidden md:flex gap-2">
            <Button
              className="hover:bg-gray-100 dark:hover:bg-zinc-800 hover:text-black transition-all duration-300"
              variant="outline"
              asChild
            >
              <NavLink className="dark:text-white" to="/login">
                Entrar
              </NavLink>
            </Button>
            <Button className="bg-black dark:bg-white" asChild>
              <NavLink
                className="text-white dark:text-black hover:bg-purple-800 hover:text-white dark:hover:bg-purple-800 dark:hover:text-white transition-all duration-300"
                to="/register"
              >
                Cadastre-se
              </NavLink>
            </Button>
          </div>
          {/* Botão de menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Menu Mobile (aparece somente em telas pequenas quando mobileMenuOpen é true) */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <NavLink
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses
              }
            >
              Início
            </NavLink>
            <NavLink
              to="/candidatos"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses
              }
            >
              Para Candidatos
            </NavLink>
            <NavLink
              to="/empresas"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses
              }
            >
              Para Empresas
            </NavLink>
            <NavLink
              to="/sobre"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? activeClasses : inactiveClasses
              }
            >
              Sobre
            </NavLink>
            {/* Seção de autenticação no menu mobile */}
            <div className="pt-2">
              <Button
                className="hover:bg-gray-100 dark:hover:bg-zinc-200 hover:text-black transition-all duration-300"
                variant="outline"
                asChild
              >
                <NavLink
                  className="dark:text-white"
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Entrar
                </NavLink>
              </Button>
              <Button className="bg-black dark:bg-white mt-2" asChild>
                <NavLink
                  className="text-white dark:text-black hover:bg-purple-800 hover:text-white dark:hover:bg-purple-800 dark:hover:text-white transition-all duration-300"
                  to="/register"
                >
                  Cadastre-se
                </NavLink>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
