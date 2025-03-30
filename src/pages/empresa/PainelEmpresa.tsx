import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Badge } from "src/components/ui/badge";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { SidebarProvider } from "src/components/ui/sidebar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { cn } from "src/lib/utils";
import { Brain, FileCheck, Filter, Star, Users } from "lucide-react";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "src/components/ui/pagination";

const DashboardEmpresa: React.FC = () => {
  // --- Estado ---
  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true); // Estado da sidebar desktop (aberta/fechada)
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false); // Estado da sidebar mobile (Sheet)

  // --- Dados de Exemplo da Empresa (Substitua por dados reais/fetch) ---
  const empresaData = {
    name: "TechCorp Inc.",
    accountType: "Conta de Administrador",
    initials: "TC",
    logoSrc: "https://github.com/shadcn.png", // Usando uma imagem de exemplo
    messageCount: 4, // Exemplo de contagem de mensagens
    notificationCount: 7, // Exemplo de contagem de notificações
  };

  // --- Dados de Paginação (Exemplo) ---
  const currentPage: number = 2;
  const totalPages = 10; // Exemplo
  const itemsPerPage = 10; // Exemplo
  const totalItems = 1248; // Exemplo

  const handlePageChange = (page: number) => {
    console.log("Mudar para página:", page);
    // Aqui eu atualizaria o estado da página atual e buscaria novos dados
  };

  const startIndex = (currentPage - 1) * itemsPerPage + 1;
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems);

  // --- Handlers para controlar a Sidebar ---
  const toggleDesktopSidebar = () => setIsDesktopSidebarOpen((prev) => !prev);
  const openMobileSheet = () => setIsMobileSheetOpen(true);

  return (
    <SidebarProvider>
      {/* Container principal flexível */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-gray-950 dark:text-white">
        {/* --- Sidebar Desktop (Fixa/Recolhida) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-gray-800",
            "bg-background dark:bg-gray-900", // Fundo explícito
            isDesktopSidebarOpen ? "w-64" : "w-16" // Largura dinâmica
          )}
        >
          {/* Renderiza o Sidebar da Empresa */}
          <EmpresaSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar} // Passa a função de toggle
            empresaName={empresaData.name}
            empresaAccountType={empresaData.accountType}
            empresaInitials={empresaData.initials}
            empresaAvatarSrc={empresaData.logoSrc}
            messageCount={empresaData.messageCount} // Passa contagem de mensagens
            onNavigate={() => {}}
            activePage="dashboard"
          />
        </div>
        {/* --- Sidebar Mobile (Sheet) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900" // Fundo explícito
            )}
          >
            <EmpresaSidebar
              isOpen={true} // Sempre aberto no Sheet
              isMobileView={true}
              empresaName={empresaData.name}
              empresaAccountType={empresaData.accountType}
              empresaInitials={empresaData.initials}
              empresaAvatarSrc={empresaData.logoSrc}
              messageCount={empresaData.messageCount}
              onNavigate={() => {}}
              activePage="dashboard"
            />
          </SheetContent>
        </Sheet>
        {/* --- Área de Conteúdo Principal --- */}
        {/* Adicionado 'min-w-0' para permitir que o container flex encolha corretamente */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
          {/* Navbar Superior */}
          <DashboardNavbar
            onMobileMenuClick={openMobileSheet} // Função para abrir o Sheet mobile
            userName={empresaData.name} // Usar nome da empresa ou do admin
            userInitials={empresaData.initials}
            userAvatarSrc={empresaData.logoSrc}
            notificationCount={empresaData.notificationCount}
          />

          {/* Conteúdo Principal (Main) */}
          {/* Adicionado overflow-x-hidden para evitar scroll horizontal indesejado */}
          <main className="flex-1 flex flex-col p-4 md:p-6 gap-6 bg-gray-50/50 dark:bg-gray-950/60 overflow-x-hidden">
            {/* ---- INÍCIO DO CONTEÚDO ESPECÍFICO DO DASHBOARD EMPRESA ---- */}

            {/* Cabeçalho do Conteúdo (Título e Botões) */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-semibold tracking-tight dark:text-white">
                  Busca de Candidatos
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  Encontre o candidato perfeito para sua equipe.
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 dark:text-white dark:border-gray-600"
                >
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filtros</span>
                </Button>
                <Button size="sm" className="h-8">
                  Publicar uma Vaga
                </Button>
              </div>
            </div>

            {/* Cards de Estatísticas */}
            <div className="mt-6 mb-6 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {/* Card 1: Total de Candidatos */}
              <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-300">
                    Total de Candidatos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    1.248 {/* Exemplo */}
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +24 esta semana {/* Exemplo */}
                  </p>
                </CardContent>
              </Card>
              {/* Card 2: Pré-selecionados */}
              <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-300">
                    Pré-selecionados
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    36 {/* Exemplo */}
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +5 esta semana {/* Exemplo */}
                  </p>
                </CardContent>
              </Card>
              {/* Card 3: Entrevistas Agendadas */}
              <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-300">
                    Entrevistas Agendadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    12 {/* Exemplo */}
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +3 esta semana {/* Exemplo */}
                  </p>
                </CardContent>
              </Card>
              {/* Card 4: Vagas Abertas */}
              <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground dark:text-gray-300">
                    Vagas Abertas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    8 {/* Exemplo */}
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +2 esta semana {/* Exemplo */}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Abas para Listagem de Candidatos */}
            <Tabs defaultValue="all" className="w-full">
              {/* Container para Abas e Ordenação */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                {/* Lista de Abas (TabsList) */}
                <TabsList className="dark:bg-gray-800 dark:border dark:border-gray-700 rounded-md p-1 flex-wrap h-auto sm:h-10">
                  {/* Ajuste para wrap e altura auto/fixa */}
                  <TabsTrigger
                    value="all"
                    className="dark:text-gray-300 data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                  >
                    Todos os Candidatos
                  </TabsTrigger>
                  <TabsTrigger
                    value="recommended"
                    className="dark:text-gray-300 data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                  >
                    Recomendados
                  </TabsTrigger>
                  <TabsTrigger
                    value="shortlisted"
                    className="dark:text-gray-300 data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white"
                  >
                    Pré-selecionados
                  </TabsTrigger>
                </TabsList>
                {/* Seletor de Ordenação */}
                <div className="flex items-center gap-2 flex-shrink-0 w-full sm:w-auto">
                  {" "}
                  {/* Garante que não quebre layout */}
                  <span className="text-sm text-muted-foreground dark:text-gray-400">
                    Ordenar por:
                  </span>
                  {/* Usando um select básico, pode ser substituído por um DropdownMenu do ShadCN */}
                  <select className="flex-grow sm:flex-grow-0 h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    <option value="relevance">Relevância</option>
                    <option value="recent">Recente</option>
                    <option value="experience">Experiência</option>
                  </select>
                </div>
              </div>

              {/* Conteúdo da Aba "Todos os Candidatos" */}
              <TabsContent value="all" className="mt-0">
                <div className="grid gap-4">
                  {/* --- Card Candidato 1 --- */}
                  <Card className="overflow-hidden dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                    {/* Layout Flexível para conteúdo e sidebar do card */}
                    <div className="flex flex-col md:flex-row">
                      {/* Seção Principal do Card (Esquerda/Topo) */}
                      <div className="p-4 md:p-6 md:flex-grow-[2] md:basis-0">
                        {" "}
                        {/* Equivalente a md:w-2/3 */}
                        {/* Cabeçalho do Candidato (Avatar, Nome, Badge, Ação) */}
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                          {/* Info do Candidato */}
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 flex-shrink-0">
                              <AvatarImage
                                src="https://github.com/shadcn.png" // Placeholder
                                alt="Jane Doe"
                              />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                Jane Doe
                              </h3>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Engenheira de Software Sênior
                              </p>
                            </div>
                          </div>
                          {/* Ações / Badges */}
                          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400 whitespace-nowrap">
                              98% Compatível
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Star className="h-4 w-4 text-muted-foreground hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400" />
                              <span className="sr-only">Pré-selecionar</span>
                            </Button>
                          </div>
                        </div>
                        {/* Detalhes (Habilidades, Experiência, Scores) */}
                        <div className="space-y-4">
                          {/* Habilidades */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              Habilidades Principais
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              <Badge variant="secondary">React</Badge>
                              <Badge variant="secondary">TypeScript</Badge>
                              <Badge variant="secondary">Node.js</Badge>
                              <Badge variant="secondary">GraphQL</Badge>
                              <Badge variant="secondary">AWS</Badge>
                            </div>
                          </div>
                          {/* Resumo */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              Resumo da Experiência
                            </h4>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              Mais de 7 anos de experiência em desenvolvimento
                              full-stack com foco em aplicações web escaláveis e
                              otimizadas. Liderança técnica em projetos...
                            </p>
                          </div>
                          {/* Scores */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                              <Brain className="h-3.5 w-3.5" />
                              <span>Lógica: 95%</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                              <Users className="h-3.5 w-3.5" />
                              <span>Cultural: 92%</span>
                            </div>
                            <div className="flex items-center gap-1 text-violet-600 dark:text-violet-400">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>Técnico: 98%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Barra Lateral do Card (Direita/Baixo) */}
                      <div className="bg-gray-50 dark:bg-gray-800/40 p-4 md:p-6 flex flex-col justify-between md:flex-grow-[1] md:basis-0 border-t md:border-t-0 md:border-l dark:border-gray-700/50">
                        {" "}
                        {/* Equivalente a md:w-1/3 */}
                        {/* Informações Adicionais */}
                        <div className="space-y-3 mb-4 md:mb-0">
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Localização
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              San Francisco, CA (Remoto)
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Educação
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              M.Sc. Ciência da Computação, Stanford
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Disponibilidade
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              2 semanas
                            </p>
                          </div>
                        </div>
                        {/* Botões de Ação */}
                        <div className="flex flex-col gap-2 mt-auto">
                          {" "}
                          {/* mt-auto empurra para baixo */}
                          <Button size="sm">Ver Perfil Completo</Button>
                          <Button size="sm" variant="outline">
                            Agendar Entrevista
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* --- Card Candidato 2 (Estrutura similar) --- */}
                  <Card className="overflow-hidden dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                    <div className="flex flex-col md:flex-row">
                      {/* Seção Principal */}
                      <div className="p-4 md:p-6 md:flex-grow-[2] md:basis-0">
                        {/* Cabeçalho */}
                        <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                          {/* Info */}
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12 flex-shrink-0">
                              <AvatarFallback>MS</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                Michael Smith
                              </h3>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Gerente de Produto
                              </p>
                            </div>
                          </div>
                          {/* Ações / Badges */}
                          <div className="flex items-center gap-2 flex-shrink-0 self-start sm:self-center">
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400 whitespace-nowrap">
                              85% Compatível
                            </Badge>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8"
                            >
                              <Star className="h-4 w-4 text-muted-foreground hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-400" />
                              <span className="sr-only">Pré-selecionar</span>
                            </Button>
                          </div>
                        </div>
                        {/* Detalhes */}
                        <div className="space-y-4">
                          {/* Habilidades */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              Habilidades Principais
                            </h4>
                            <div className="flex flex-wrap gap-1.5">
                              <Badge variant="secondary">
                                Estratégia Produto
                              </Badge>
                              <Badge variant="secondary">
                                Metodologias Ágeis
                              </Badge>
                              <Badge variant="secondary">UX Research</Badge>
                              <Badge variant="secondary">Roadmapping</Badge>
                            </div>
                          </div>
                          {/* Resumo */}
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-gray-300">
                              Resumo da Experiência
                            </h4>
                            <p className="text-sm text-muted-foreground dark:text-gray-400 line-clamp-2">
                              5 anos de experiência em gerenciamento de produtos
                              SaaS B2B, focado em crescimento e retenção.
                            </p>
                          </div>
                          {/* Scores */}
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm">
                            <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400">
                              <Brain className="h-3.5 w-3.5" />
                              <span>Lógica: 88%</span>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-600 dark:text-indigo-400">
                              <Users className="h-3.5 w-3.5" />
                              <span>Cultural: 90%</span>
                            </div>
                            <div className="flex items-center gap-1 text-violet-600 dark:text-violet-400">
                              <FileCheck className="h-3.5 w-3.5" />
                              <span>Produto: 85%</span> {/* Exemplo */}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Barra Lateral */}
                      <div className="bg-gray-50 dark:bg-gray-800/40 p-4 md:p-6 flex flex-col justify-between md:flex-grow-[1] md:basis-0 border-t md:border-t-0 md:border-l dark:border-gray-700/50">
                        <div className="space-y-3 mb-4 md:mb-0">
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Localização
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              New York, NY (Híbrido)
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Educação
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              MBA, Harvard Business School
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-semibold uppercase text-muted-foreground dark:text-gray-500 mb-0.5">
                              Disponibilidade
                            </h4>
                            <p className="text-sm dark:text-gray-300">
                              Imediata
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-auto">
                          <Button size="sm">Ver Perfil Completo</Button>
                          <Button size="sm" variant="outline">
                            Agendar Entrevista
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Adicionar mais cards de candidatos conforme necessário */}
                </div>
              </TabsContent>

              {/* Conteúdo da Aba "Recomendados" */}
              <TabsContent value="recommended" className="mt-0">
                <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                  <CardContent className="p-6">
                    {/* Estado Vazio/Placeholder */}
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                        <Brain className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 dark:text-white">
                        Recomendações Inteligentes em Breve
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-400 text-sm">
                        Nossa IA está processando os melhores candidatos para
                        suas vagas abertas. Volte em breve para ver as
                        recomendações.
                      </p>
                      <Button disabled>Atualizando Recomendações...</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Conteúdo da Aba "Pré-selecionados" */}
              <TabsContent value="shortlisted" className="mt-0">
                <Card className="dark:bg-gray-800/60 border dark:border-gray-700/50 shadow-sm dark:shadow-none">
                  <CardContent className="p-6">
                    {/* Estado Vazio/Placeholder */}
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                        <Star className="h-8 w-8 text-yellow-600 dark:text-yellow-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 dark:text-white">
                        Nenhum Candidato Pré-selecionado
                      </h3>
                      <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-400 text-sm">
                        Você ainda não pré-selecionou nenhum candidato. Clique
                        no ícone de estrela{" "}
                        <Star className="inline h-4 w-4 align-text-bottom" />{" "}
                        nos perfis para adicioná-los aqui.
                      </p>
                      {/* Adicionar um botão ou link para voltar para a aba "Todos" se desejado */}
                      {/* <Button variant="outline">Ver Todos os Candidatos</Button> */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Paginação */}
            <div
              className={cn(
                "flex flex-col sm:flex-row items-center justify-center sm:justify-between", // Responsividade e Alinhamento
                "gap-4 pt-4 border-t dark:border-gray-700/50", // Estilos
                "mt-auto" // Empurra para baixo
              )}
            >
              {/* Texto informativo */}
              <div className="text-sm text-muted-foreground dark:text-gray-400 shrink-0">
                {" "}
                {/* shrink-0 evita que encolha demais */}
                Exibindo{" "}
                <strong>
                  {startIndex}-{endIndex}
                </strong>{" "}
                de <strong>{totalItems}</strong> candidatos
              </div>

              {/* Componente de Paginação do ShadCN */}
              {/* Não precisa de classes extras de alinhamento aqui, o pai cuida */}
              <Pagination>
                <PaginationContent>
                  {/* Botão Anterior */}
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={cn(
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      )}
                      aria-disabled={currentPage === 1}
                    />
                  </PaginationItem>

                  {/* Números (Lógica de exemplo) */}
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(1)}
                      isActive={currentPage === 1}
                    >
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(2)}
                      isActive={currentPage === 2}
                    >
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink
                      onClick={() => handlePageChange(3)}
                      isActive={currentPage === 3}
                    >
                      3
                    </PaginationLink>
                  </PaginationItem>
                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                  )}
                  {totalPages > 4 && currentPage < totalPages - 1 && (
                    <PaginationItem>
                      <PaginationLink
                        onClick={() => handlePageChange(totalPages)}
                        isActive={currentPage === totalPages}
                      >
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  )}
                  {/* Fim da lógica de exemplo dos números */}

                  {/* Botão Próximo */}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={cn(
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      )}
                      aria-disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>

            {/* ---- FIM DO CONTEÚDO ESPECÍFICO DO DASHBOARD EMPRESA ---- */}
          </main>
        </div>{" "}
        {/* Fim da área de conteúdo principal */}
      </div>{" "}
      {/* Fim do container flex principal */}
    </SidebarProvider>
  );
};

export default DashboardEmpresa;
