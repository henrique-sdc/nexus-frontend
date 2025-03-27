import React from "react";
import { Search, Bell, Menu } from "lucide-react";
import { Button } from "src/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
// Removido o import não utilizado de Sheet, SheetContent, SheetTrigger, CandidateSidebar

// Interface para as props do Navbar
interface DashboardNavbarProps {
  onMobileMenuClick: () => void; // Função para abrir o menu mobile (Sheet)
  userName: string;
  userInitials: string;
  userAvatarSrc?: string;
  notificationCount: number;
}

export const DashboardNavbar: React.FC<DashboardNavbarProps> = ({
  onMobileMenuClick,
  userName,
  userInitials,
  userAvatarSrc,
  notificationCount,
}) => {
  return (
    // bg-background garante que tenha fundo sólido quando sobrepõe o conteúdo.
    <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 sm:px-6 dark:border-gray-700 dark:bg-gray-900">
      {/* Botão do Menu Mobile (Sheet Trigger) - visível apenas em telas pequenas */}
      <div className="lg:hidden">
        {/* O botão agora apenas chama a função passada por props para abrir o Sheet */}
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 lg:hidden" // Mantido lg:hidden aqui é redundante devido ao container pai, mas não prejudica
          onClick={onMobileMenuClick} // Chama a função para abrir o Sheet no componente pai (DashboardCandidato)
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Abrir menu lateral</span>
        </Button>
      </div>

      {/* Logo visível em telas menores (quando o menu está fechado) */}
      {/* Este logo SÓ aparece em telas menores que lg E quando o menu hamburguer está visível */}
      <div className="flex items-center gap-2 lg:hidden ml-2">
        {" "}
        {/* Ajuste de margem */}
        <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
          </div>
        </div>
        <span className="text-xl font-bold dark:text-white">Nexus</span>
      </div>

      {/* Barra de Pesquisa - Ocupa o espaço restante */}
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
            {/* Input estilizado */}
            <input
              type="search"
              placeholder="Pesquisar por vagas, empresas..."
              className="w-full rounded-md border border-input bg-background pl-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-2/3 lg:w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
            />
          </div>
        </form>
      </div>

      {/* Ícones e Avatar do Usuário à Direita */}
      <div className="flex items-center gap-3 md:gap-4 ml-auto">
        {" "}
        {/* ml-auto empurra para a direita */}
        {/* Botão de Notificações */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full relative shrink-0"
        >
          <Bell className="h-4 w-4 dark:text-white" />
          <span className="sr-only">Notificações</span>
          {/* Badge de Notificação */}
          {notificationCount > 0 && (
            <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-[10px] font-medium text-white flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </Button>
        {/* Avatar do Usuário */}
        <Avatar className="h-9 w-9 shrink-0">
          <AvatarImage src={userAvatarSrc} alt={userName} />
          <AvatarFallback>{userInitials}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
