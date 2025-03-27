import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart3,
  Building2,
  Calendar,
  FileCheck,
  Heart,
  MessageSquare,
  PanelRightOpen,
  Settings,
  User,
} from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "src/components/ui/sidebar";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { cn } from "src/lib/utils";

// Interface para as props da Sidebar
interface CandidatoSidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
  isMobileView?: boolean;
  userName: string;
  userTitle: string;
  userInitials: string;
  userAvatarSrc?: string;
  messageCount: number;
}

export const CandidatoSidebar: React.FC<CandidatoSidebarProps> = ({
  isOpen,
  toggleSidebar,
  isMobileView = false,
  userName,
  userTitle,
  userInitials,
  userAvatarSrc,
  messageCount,
}) => {
  // Classe base para os botões do menu
  const menuButtonClass = (isActive = false): string =>
    cn(
      "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors dark:text-gray-400 hover:bg-accent hover:text-foreground",
      !isOpen ? "justify-center px-2" : "",
      isActive
        ? "bg-accent text-foreground dark:bg-gray-700 dark:text-white"
        : ""
    );

  return (
    // Container principal da Sidebar
    // Adicionado w-full para garantir que o componente preencha a largura dada pelo pai (w-16 ou w-64)
    <div
      className={cn(
        "flex flex-col h-full bg-background dark:bg-gray-900 w-full",
        isMobileView ? "" : ""
      )}
    >
      {/* Cabeçalho da Sidebar */}
      {/* Adicionado 'border-b' apenas se necessário visualmente para separar do conteúdo abaixo */}
      <SidebarHeader className="flex items-center justify-between p-4 h-16 border-b dark:border-gray-800">
        {/* Container da Logo e Nome */}
        <div className="flex items-center gap-2">
          {/* Ícone/Logo */}
          <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
            </div>
          </div>
          {/* Nome "Nexus" somente se aberto */}
          {isOpen && (
            <span className="text-xl font-bold dark:text-white whitespace-nowrap">
              Nexus
            </span>
          )}
          {/* Botão para Minimizar/Expandir – alinhado à direita */}
        </div>
        <div className="pt-2"></div>
        {!isMobileView && toggleSidebar && (
          <button
            onClick={toggleSidebar}
            className="p-1 rounded ml-auto hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label={isOpen ? "Recolher menu" : "Expandir menu"}
          >
            <PanelRightOpen
              className={cn(
                "h-6 w-6 transform transition-transform duration-300 dark:text-white",
                !isOpen ? "rotate-180" : ""
              )}
            />
          </button>
        )}
      </SidebarHeader>

      {/* Conteúdo Principal da Sidebar (Menu) */}
      <SidebarContent className="flex-1 py-4 pt-8 dark:pt-12 overflow-y-auto">
        <SidebarMenu className="space-y-1 px-2">
          {/* Item: Painel de Controle */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass(true)}>
                {" "}
                {/* Exemplo ativo */}
                <BarChart3 className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Painel de Controle</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Meu Perfil */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass()}>
                <User className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Meu Perfil</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Vagas Compatíveis */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass()}>
                <Building2 className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Vagas Compatíveis</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Avaliações */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/tests" className={menuButtonClass()}>
                <FileCheck className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Avaliações</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Mensagens */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              {/* O Link agora ocupa todo o botão */}
              <Link to="#" className={menuButtonClass()}>
                <div className="flex items-center gap-3">
                  {" "}
                  {/* Wrapper para controlar layout interno */}
                  <MessageSquare className="h-5 w-5 flex-shrink-0" />
                  {isOpen && (
                    // Container para texto e badge quando aberto
                    <div className="flex flex-1 justify-between items-center">
                      <span>Mensagens</span>
                      <div className="ml-20"></div>
                      {messageCount > 0 && (
                        <Badge className="ml-auto h-5 px-1.5 text-xs bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400">
                          {messageCount}
                        </Badge>
                      )}
                    </div>
                  )}
                </div>
                {/* Badge indicador no modo recolhido (posicionado absolutamente relativo ao Link/Button) */}
                {!isOpen && messageCount > 0 && (
                  <span className="absolute right-1/4 top-1 block h-2 w-2 rounded-full bg-purple-600 ring-background dark:ring-gray-900">
                    <span className="sr-only">
                      {messageCount} mensagens não lidas
                    </span>
                  </span>
                )}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Vagas Salvas */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass()}>
                <Heart className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Vagas Salvas</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Entrevistas */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass()}>
                <Calendar className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Entrevistas</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          {/* Item: Configurações */}
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="#" className={menuButtonClass()}>
                <Settings className="h-5 w-5 flex-shrink-0" />
                {isOpen && <span>Configurações</span>}
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      {/* Rodapé da Sidebar */}
      <SidebarFooter className="p-4 border-t dark:border-gray-700">
        <div
          className={cn(
            "flex items-center gap-3",
            !isOpen ? "justify-center" : ""
          )}
        >
          <Avatar className={cn(isOpen ? "h-9 w-9" : "h-8 w-8")}>
            <AvatarImage src={userAvatarSrc} alt={userName} />
            <AvatarFallback>{userInitials}</AvatarFallback>
          </Avatar>
          {isOpen && (
            <div className="overflow-hidden">
              <p className="text-sm font-medium dark:text-white truncate">
                {userName}
              </p>
              <p className="text-xs text-muted-foreground dark:text-gray-400 truncate">
                {userTitle}
              </p>
            </div>
          )}
        </div>
      </SidebarFooter>
    </div>
  );
};
