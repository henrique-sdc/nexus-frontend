import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-10">
      <div className="container mx-auto px-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          <span className="text-sm font-semibold">Nexus</span>
        </div>
        <nav className="flex gap-4 md:gap-6">
          <Link
            to="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Termos
          </Link>
          <Link
            to="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Privacidade
          </Link>
          <Link
            to="#"
            className="text-xs text-muted-foreground hover:underline underline-offset-4"
          >
            Contato
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nexus. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
