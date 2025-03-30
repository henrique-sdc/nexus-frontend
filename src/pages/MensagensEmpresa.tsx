import React, { useState, useRef, useEffect } from "react"; // Adicionado useRef e useEffect

// --- Importações Essenciais (Layout Padrão - EmpresaSidebar) ---
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar";

// --- Importações dos Componentes UI para o conteúdo ---
import { Button } from "src/components/ui/button";
import { Card } from "src/components/ui/card"; // Card já estava, mas só para confirmar
import { Input } from "src/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Badge } from "src/components/ui/badge";

// --- Importações dos Ícones ---
import { Paperclip, Search, Send, Smile } from "lucide-react";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página de Mensagens do Dashboard da Empresa.
 * Exibe a lista de conversas e a janela de chat para comunicação.
 * Utiliza a estrutura de layout padrão do dashboard da empresa.
 */
export default function MensagensEmpresa() {
  // --- Estado para Controle da Sidebar/Sheet (Estrutura padrão) ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // --- Hooks (Exemplo: Navegação) ---
  // const navigate = useNavigate();

  // --- Handlers para Sidebar/Sheet (Estrutura padrão) ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  const navigateTo = (path: string) => {
    console.log("Navegar para (placeholder):", path);
    // Exemplo com react-router-dom:
    // navigate(path);
    setIsMobileSheetOpen(false);
  };

  // --- Dados de Exemplo da Empresa (Estrutura padrão) ---
  const empresaData = {
    name: "TechCorp Inc.",
    accountType: "Conta de Administrador",
    initials: "TC", // Usado no fallback do avatar do remetente
    logoSrc: "https://github.com/shadcn.png",
    messageCount: 4,
    notificationCount: 7,
  };

  // --- Estados e Refs para o Chat ---
  const [selectedConversation, setSelectedConversation] = useState<
    string | null
  >("conv1"); // ID da conversa ativa
  const [searchTerm, setSearchTerm] = useState(""); // Estado para busca
  const chatContainerRef = useRef<HTMLDivElement>(null); // Ref para scroll

  // --- Dados de Exemplo das Conversas e Mensagens (Substituir por API) ---
  const conversations = [
    {
      id: "conv1",
      name: "Jane Doe",
      initials: "JD",
      avatar: "",
      lastMessage:
        "Estou animada com a oportunidade de me juntar à sua equipe...",
      time: "2m",
      jobTitle: "Desenvolvedor Frontend Sênior",
      badgeColor: "purple",
    },
    {
      id: "conv2",
      name: "Michael Smith",
      initials: "MS",
      avatar: "",
      lastMessage:
        "Obrigado por considerar minha candidatura. Tenho algumas perguntas...",
      time: "1h",
      jobTitle: "Gerente de Produto",
      badgeColor: "indigo",
    },
    {
      id: "conv3",
      name: "Sarah Johnson",
      initials: "SJ",
      avatar: "",
      lastMessage: "Anexei meu portfólio como solicitado. Ansiosa para...",
      time: "1d",
      jobTitle: "Designer UX/UI",
      badgeColor: "violet",
    },
    {
      id: "conv4",
      name: "Alex Chen",
      initials: "AC",
      avatar: "",
      lastMessage:
        "Qual seria um bom momento para agendar a entrevista técnica?",
      time: "2d",
      jobTitle: "Desenvolvedor Backend",
      badgeColor: "purple",
    },
  ];

  // Exemplo de mensagens para a conversa selecionada (Jane Doe - conv1)
  const messages = [
    {
      id: "m1",
      sender: "JD",
      text: "Olá! Estou animada com a oportunidade de me juntar à sua equipe como Desenvolvedora Frontend Sênior. Tenho mais de 7 anos de experiência trabalhando com React e tecnologias relacionadas.",
      time: "10:30 AM",
      date: "20 de Março de 2025",
      type: "received",
    },
    {
      id: "m2",
      sender: "TC",
      text: "Oi Jane, obrigado pelo seu interesse! Sua experiência parece impressionante. Poderia me contar mais sobre sua experiência com otimização de performance em aplicações React?",
      time: "10:35 AM",
      date: "20 de Março de 2025",
      type: "sent",
    },
    {
      id: "m3",
      sender: "JD",
      text: "Na minha função anterior na TechInnovate, liderei um projeto para otimizar nosso painel que estava sofrendo com problemas de performance. Implementei code splitting, memoization e listas virtualizadas, o que reduziu o tempo de carregamento em 60% e melhorou a responsividade geral.",
      time: "10:42 AM",
      date: "20 de Março de 2025",
      type: "received",
    },
    {
      id: "m4",
      sender: "JD",
      text: "Estou animada com a oportunidade de me juntar à sua equipe e contribuir para seus projetos. Qual seria um bom momento para discutirmos isso melhor?",
      time: "10:45 AM",
      date: "20 de Março de 2025",
      type: "received",
    },
    {
      id: "m5",
      sender: "TC",
      text: "Isso é um trabalho impressionante! Adoraria agendar uma videochamada para discutir mais detalhes. Que tal amanhã às 14h (EST)?",
      time: "Agora",
      date: "Hoje",
      type: "sent",
    },
  ];

  // --- Lógica de Filtro para Conversas ---
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conv.jobTitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Efeito para Scrollar para o fim do chat ---
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]); // Re-scrolla quando as mensagens mudam

  // Função para obter a cor do badge com base no nome da cor (exemplo)
  const getBadgeClasses = (colorName: string): string => {
    switch (colorName) {
      case "purple":
        return "bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400";
      case "indigo":
        return "bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400";
      case "violet":
        return "bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  // Obter dados da conversa selecionada
  const activeConversationData = conversations.find(
    (c) => c.id === selectedConversation
  );

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura padrão) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-gray-950">
        {/* --- Sidebar Desktop (EmpresaSidebar) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-gray-800",
            "bg-background dark:bg-gray-900",
            isDesktopSidebarOpen ? "w-64" : "w-16"
          )}
        >
          <EmpresaSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar}
            empresaName={empresaData.name}
            empresaAccountType={empresaData.accountType}
            empresaInitials={empresaData.initials}
            empresaAvatarSrc={empresaData.logoSrc}
            messageCount={empresaData.messageCount}
            onNavigate={navigateTo}
            activePage="mensagens" // **IMPORTANTE**
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - EmpresaSidebar) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900"
            )}
          >
            <EmpresaSidebar
              isOpen={true}
              isMobileView={true}
              empresaName={empresaData.name}
              empresaAccountType={empresaData.accountType}
              empresaInitials={empresaData.initials}
              empresaAvatarSrc={empresaData.logoSrc}
              messageCount={empresaData.messageCount}
              onNavigate={navigateTo}
              activePage="mensagens" // **IMPORTANTE**
            />
          </SheetContent>
        </Sheet>

        {/* --- Área de Conteúdo Principal (Estrutura padrão) --- */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
          {/* Navbar Superior (Estrutura padrão) */}
          <DashboardNavbar
            onMobileMenuClick={openMobileSheet}
            userName={empresaData.name}
            userInitials={empresaData.initials}
            userAvatarSrc={empresaData.logoSrc}
            notificationCount={empresaData.notificationCount}
          />

          {/* Conteúdo Principal (Main) - Layout padrão */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-gray-950/60 overflow-x-hidden">
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE MENSAGENS              */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página */}
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Mensagens
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  Comunique-se com candidatos e membros da equipe
                </p>
              </div>

              {/* Grid Principal: Lista de Conversas | Janela de Chat */}
              {/* Altura calculada para preencher espaço, ajuste '12rem' se altura da navbar/header for diferente */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-15rem)] md:h-[calc(100vh-14rem)]">
                {" "}
                {/* Altura ajustada */}
                {/* Coluna da Lista de Conversas */}
                <Card className="col-span-1 overflow-hidden flex flex-col bg-background dark:bg-gray-800 dark:border dark:border-gray-700">
                  {/* Barra de Busca */}
                  <div className="p-4 border-b dark:border-gray-700">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                      <Input
                        type="search"
                        placeholder="Buscar mensagens..."
                        className="pl-8 bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* Lista de Conversas com Scroll */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="divide-y dark:divide-gray-700">
                      {/* Mapeando as conversas filtradas */}
                      {filteredConversations.map((conv) => (
                        <div
                          key={conv.id}
                          onClick={() => setSelectedConversation(conv.id)} // Seleciona a conversa ao clicar
                          className={cn(
                            "p-4 cursor-pointer transition-colors hover:bg-gray-100 dark:hover:bg-gray-700/50",
                            selectedConversation === conv.id
                              ? "bg-gray-100 dark:bg-gray-700"
                              : "" // Highlight da conversa ativa
                          )}
                        >
                          <div className="flex gap-3">
                            {/* Avatar */}
                            <Avatar className="h-10 w-10 border dark:border-gray-600">
                              {" "}
                              {/* Tamanho ajustado */}
                              <AvatarImage
                                src={conv.avatar || undefined}
                                alt={conv.name}
                              />
                              <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                {conv.initials}
                              </AvatarFallback>
                            </Avatar>
                            {/* Informações da Conversa */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <h3 className="font-medium truncate text-gray-900 dark:text-white">
                                  {conv.name}
                                </h3>
                                <span className="text-xs text-muted-foreground dark:text-gray-400 flex-shrink-0 ml-2">
                                  {conv.time}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground dark:text-gray-400 truncate">
                                {conv.lastMessage}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  className={cn(
                                    "text-xs px-1.5 py-0.5",
                                    getBadgeClasses(conv.badgeColor)
                                  )}
                                >
                                  {conv.jobTitle}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* Mensagem se não houver conversas */}
                      {filteredConversations.length === 0 && (
                        <div className="p-4 text-center text-sm text-muted-foreground dark:text-gray-500">
                          Nenhuma conversa encontrada.
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
                {/* Coluna da Janela de Chat */}
                <Card className="col-span-1 lg:col-span-2 flex flex-col overflow-hidden bg-background dark:bg-gray-800 dark:border dark:border-gray-700">
                  {/* Cabeçalho do Chat (com info da conversa ativa) */}
                  {activeConversationData ? (
                    <div className="p-4 border-b dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border dark:border-gray-600">
                          <AvatarImage
                            src={activeConversationData.avatar || undefined}
                            alt={activeConversationData.name}
                          />
                          <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                            {activeConversationData.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium text-gray-900 dark:text-white">
                            {activeConversationData.name}
                          </h3>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge
                              className={cn(
                                "text-xs px-1.5 py-0.5",
                                getBadgeClasses(
                                  activeConversationData.badgeColor
                                )
                              )}
                            >
                              {activeConversationData.jobTitle}
                            </Badge>
                            {/* Adicionar mais informações se necessário, e.g., data da candidatura */}
                            {/* <span className="text-xs text-muted-foreground dark:text-gray-400">• Candidatou-se há 2 dias</span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Placeholder se nenhuma conversa estiver selecionada
                    <div className="p-4 border-b dark:border-gray-700 text-center text-muted-foreground dark:text-gray-500">
                      Selecione uma conversa para começar
                    </div>
                  )}

                  {/* Área das Mensagens com Scroll */}
                  <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-4 space-y-4"
                  >
                    {activeConversationData ? (
                      messages.map((msg, index) => (
                        <React.Fragment key={msg.id}>
                          {/* Separador de Data (Simplificado) */}
                          {(index === 0 ||
                            messages[index - 1].date !== msg.date) && (
                            <div className="relative flex py-3 items-center">
                              <div className="flex-grow border-t dark:border-gray-700"></div>
                              <span className="flex-shrink mx-4 text-xs text-muted-foreground dark:text-gray-400">
                                {msg.date}
                              </span>
                              <div className="flex-grow border-t dark:border-gray-700"></div>
                            </div>
                          )}

                          {/* Mensagem Recebida */}
                          {msg.type === "received" && (
                            <div className="flex gap-3 max-w-[85%] sm:max-w-[75%]">
                              {" "}
                              {/* Limita largura */}
                              <Avatar className="h-8 w-8 border dark:border-gray-600 flex-shrink-0">
                                <AvatarImage
                                  src={
                                    activeConversationData?.avatar || undefined
                                  }
                                  alt={activeConversationData?.name}
                                />
                                <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                  {activeConversationData?.initials}
                                </AvatarFallback>
                              </Avatar>
                              <div className="space-y-1">
                                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg rounded-tl-none">
                                  <p className="text-sm text-gray-900 dark:text-gray-200">
                                    {msg.text}
                                  </p>
                                </div>
                                <span className="text-xs text-muted-foreground dark:text-gray-500">
                                  {msg.time}
                                </span>
                              </div>
                            </div>
                          )}

                          {/* Mensagem Enviada */}
                          {msg.type === "sent" && (
                            <div className="flex gap-3 justify-end">
                              <div className="space-y-1 text-right max-w-[85%] sm:max-w-[75%]">
                                {" "}
                                {/* Limita largura */}
                                <div className="bg-blue-600 text-white dark:bg-blue-700 dark:text-blue-50 p-3 rounded-lg rounded-tr-none">
                                  <p className="text-sm">{msg.text}</p>
                                </div>
                                <span className="text-xs text-muted-foreground dark:text-gray-500">
                                  {msg.time}
                                </span>
                              </div>
                              <Avatar className="h-8 w-8 border dark:border-gray-600 flex-shrink-0">
                                <AvatarImage
                                  src={empresaData.logoSrc}
                                  alt="Você"
                                />
                                <AvatarFallback className="bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                                  {empresaData.initials}
                                </AvatarFallback>
                              </Avatar>
                            </div>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      // Placeholder se nenhuma conversa selecionada
                      <div className="flex items-center justify-center h-full text-muted-foreground dark:text-gray-500">
                        Selecione uma conversa para ver as mensagens.
                      </div>
                    )}
                  </div>

                  {/* Input de Mensagem */}
                  {activeConversationData && ( // Só mostra o input se uma conversa estiver ativa
                    <div className="p-4 border-t dark:border-gray-700">
                      <div className="flex gap-2 items-center">
                        {" "}
                        {/* items-center para alinhar */}
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full flex-shrink-0 dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                        >
                          <Paperclip className="h-4 w-4" />
                          <span className="sr-only">Anexar arquivo</span>
                        </Button>
                        <Input
                          placeholder="Digite uma mensagem..."
                          className="flex-1 bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          className="rounded-full flex-shrink-0 dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                        >
                          <Smile className="h-4 w-4" />
                          <span className="sr-only">Adicionar emoji</span>
                        </Button>
                        <Button
                          size="icon"
                          className="rounded-full flex-shrink-0 dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700"
                        >
                          <Send className="h-4 w-4" />
                          <span className="sr-only">Enviar mensagem</span>
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE MENSAGENS                */}
            {/* ================================================================== */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
