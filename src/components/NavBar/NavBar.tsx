import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import ModeToggle from "src/components/DarkMode/ModeToggle";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          <span className="text-xl font-bold">Nexus</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Início
          </Link>
          <Link
            to="/candidatos"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Para Candidatos
          </Link>
          <Link
            to="/empresas"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Para Empresas
          </Link>
          <Link
            to="/sobre"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Sobre
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/login">Entrar</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Registrar</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
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
    </header>
  );
};

export default NavBar;
