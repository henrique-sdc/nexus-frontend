import React, { useState } from "react";

// --- Importações Essenciais (Layout Padrão - COM EmpresaSidebar CORRETA) ---
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { EmpresaSidebar } from "src/components/Dashboards/Empresas/EmpresaSidebar"; // Caminho correto

// --- Importações dos Componentes UI para o conteúdo ---
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Badge } from "src/components/ui/badge";

// --- Importações dos Ícones ---
import {
  Building2,
  Clock,
  Edit,
  Eye,
  FileText,
  Plus,
  Trash2,
  Users,
} from "lucide-react";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Gerenciar Vagas" do Dashboard da Empresa.
 * Permite visualizar e gerenciar as vagas publicadas.
 * Utiliza a estrutura de layout padrão com EmpresaSidebar.
 */
export default function GerenciarVagas() {
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

  // --- Dados de Exemplo da Empresa (Usando a estrutura fornecida) ---
  const empresaData = {
    name: "TechCorp Inc.", // Usado em 'empresaName'
    accountType: "Conta de Administrador", // Usado em 'empresaAccountType'
    initials: "TC", // Usado em 'empresaInitials'
    logoSrc: "https://github.com/shadcn.png", // Usado em 'empresaAvatarSrc' e Navbar
    messageCount: 4, // Usado em 'messageCount'
    notificationCount: 7, // Usado na Navbar
  };

  // --- Dados de Exemplo das Vagas (Substituir por API) ---
  const vagasAtivas = [
    {
      id: "vaga1",
      titulo: "Desenvolvedor Frontend Sênior",
      local: "São Francisco, CA (Remoto)",
      tipo: "Tempo Integral",
      candidatos: 42,
      skills: ["React", "TypeScript", "Tailwind CSS", "5+ anos"],
      dataPostagem: "15 de Março de 2025",
      expiraEm: 20, // dias
    },
    {
      id: "vaga2",
      titulo: "Gerente de Produto",
      local: "Nova York, NY (Híbrido)",
      tipo: "Tempo Integral",
      candidatos: 28,
      skills: ["Estratégia de Produto", "Agile", "SaaS", "3+ anos"],
      dataPostagem: "10 de Março de 2025",
      expiraEm: 15,
    },
    {
      id: "vaga3",
      titulo: "Designer UX/UI",
      local: "Austin, TX (Presencial)",
      tipo: "Tempo Integral",
      candidatos: 15,
      skills: ["Figma", "UI Design", "Pesquisa de Usuário", "2+ anos"],
      dataPostagem: "5 de Março de 2025",
      expiraEm: 10,
    },
  ];

  // --- Dados de Exemplo - Estatísticas (Substituir por API) ---
  const stats = {
    vagasAtivas: 8,
    novasVagasMes: "+2",
    totalCandidaturas: 156,
    novasCandidaturasSemana: "+34",
    entrevistasAgendadas: 12,
    novasEntrevistasSemana: "+3",
    tempoMedioContratacao: "18 dias",
    variacaoTempoContratacao: "-2 dias",
  };

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura padrão) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-gray-950">
        {/* --- Sidebar Desktop (Com props CORRETAS para EmpresaSidebar) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-gray-800",
            "bg-background dark:bg-gray-900",
            isDesktopSidebarOpen ? "w-64" : "w-16"
          )}
        >
          <EmpresaSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar} // Assumindo que o handler é necessário
            empresaName={empresaData.name}
            empresaAccountType={empresaData.accountType}
            empresaInitials={empresaData.initials}
            empresaAvatarSrc={empresaData.logoSrc}
            messageCount={empresaData.messageCount}
            onNavigate={navigateTo}
            activePage="gerenciar-vagas" // **IMPORTANTE**
            // isMobileView não é necessário aqui
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - Com props CORRETAS para EmpresaSidebar) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900"
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
              onNavigate={navigateTo}
              activePage="gerenciar-vagas" // **IMPORTANTE**
              // toggleSidebar não é necessário aqui
            />
          </SheetContent>
        </Sheet>

        {/* --- Área de Conteúdo Principal (Estrutura padrão) --- */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
          {/* Navbar Superior (Usando dados de empresaData) */}
          <DashboardNavbar
            onMobileMenuClick={openMobileSheet}
            userName={empresaData.name} // Mostrando nome da empresa na Navbar
            userInitials={empresaData.initials}
            userAvatarSrc={empresaData.logoSrc}
            notificationCount={empresaData.notificationCount}
          />

          {/* Conteúdo Principal (Main) - Layout padrão */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-gray-950/60 overflow-x-hidden">
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA GERENCIAR VAGAS           */}
            {/* (O conteúdo interno permanece o mesmo da versão anterior)        */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Gerenciar Vagas
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    Gerencie as publicações de vagas da sua empresa
                  </p>
                </div>
                <Button className="gap-1 dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  <span>Criar Nova Vaga</span>
                </Button>
              </div>

              {/* Cards de Estatísticas */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Vagas Ativas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.vagasAtivas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {stats.novasVagasMes} este mês
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Total de Candidaturas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.totalCandidaturas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {stats.novasCandidaturasSemana} esta semana
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Entrevistas Agendadas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.entrevistasAgendadas}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {stats.novasEntrevistasSemana} esta semana
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-700 dark:text-gray-400">
                      Tempo Médio para Contratar
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stats.tempoMedioContratacao}
                    </div>
                    <p className="text-xs text-muted-foreground dark:text-gray-400">
                      {stats.variacaoTempoContratacao} desde mês passado
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Abas de Status das Vagas */}
              <Tabs defaultValue="ativas" className="w-full">
                <TabsList className="bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger
                    value="ativas"
                    className="dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    Ativas
                  </TabsTrigger>
                  <TabsTrigger
                    value="rascunho"
                    className="dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    Rascunho
                  </TabsTrigger>
                  <TabsTrigger
                    value="fechadas"
                    className="dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    Fechadas
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo Aba: Ativas */}
                <TabsContent value="ativas" className="mt-4">
                  <div className="grid gap-4">
                    {vagasAtivas.map((vaga) => (
                      <Card
                        key={vaga.id}
                        className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700"
                      >
                        <div className="p-4 md:p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                            <div className="space-y-3 flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="font-semibold text-lg text-gray-900 dark:text-white truncate">
                                  {vaga.titulo}
                                </h3>
                                <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-xs px-2 py-0.5">
                                  Ativa
                                </Badge>
                              </div>
                              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground dark:text-gray-400">
                                <div className="flex items-center gap-1">
                                  <Building2 className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.local}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.tipo}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4 flex-shrink-0" />
                                  <span>{vaga.candidatos} candidatos</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-1 pt-1">
                                {vaga.skills.map((skill) => (
                                  <Badge
                                    key={skill}
                                    variant="outline"
                                    className="text-xs px-1.5 py-0.5 dark:border-gray-600 dark:text-gray-400"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                              <p className="text-sm text-muted-foreground dark:text-gray-400 pt-1">
                                Postada em {vaga.dataPostagem} • Expira em{" "}
                                {vaga.expiraEm} dias
                              </p>
                            </div>
                            <div className="flex flex-row sm:flex-col gap-2 mt-2 md:mt-0 md:ml-4 flex-shrink-0">
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 w-full sm:w-auto dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                              >
                                <Eye className="h-4 w-4" />
                                <span>Ver</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 w-full sm:w-auto dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                              >
                                <Edit className="h-4 w-4" />
                                <span>Editar</span>
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="gap-1 text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 dark:border-gray-600 dark:hover:bg-gray-700 w-full sm:w-auto"
                              >
                                <Trash2 className="h-4 w-4" />
                                <span>Excluir</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                    {vagasAtivas.length === 0 && (
                      <div className="text-center py-10 text-muted-foreground dark:text-gray-500 col-span-full">
                        Nenhuma vaga ativa no momento.
                      </div>
                    )}
                  </div>
                </TabsContent>

                {/* Conteúdo Aba: Rascunho */}
                <TabsContent value="rascunho" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/20 mb-4">
                        <FileText className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Vagas em Rascunho
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        Você tem 2 vagas salvas como rascunho. Continue
                        editando-as ou crie uma nova vaga.
                      </p>
                      <div className="flex gap-2 flex-wrap justify-center">
                        <Button
                          variant="outline"
                          className="dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                        >
                          Ver Rascunhos
                        </Button>
                        <Button className="gap-1 dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                          <Plus className="h-4 w-4" />
                          <span>Criar Nova Vaga</span>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>

                {/* Conteúdo Aba: Fechadas */}
                <TabsContent value="fechadas" className="mt-4">
                  <Card className="p-6 bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <div className="rounded-full bg-indigo-100 p-3 dark:bg-indigo-900/20 mb-4">
                        <Clock className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                        Vagas Fechadas
                      </h3>
                      <p className="text-muted-foreground dark:text-gray-400 max-w-md mx-auto mb-4">
                        Você tem 5 vagas fechadas. Você pode visualizá-las ou
                        republicá-las com informações atualizadas.
                      </p>
                      <Button
                        variant="outline"
                        className="dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                      >
                        Ver Vagas Fechadas
                      </Button>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>

              {/* Paginação (Placeholder) */}
              <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
                <div className="text-sm text-muted-foreground dark:text-gray-400">
                  Mostrando{" "}
                  <strong>
                    1-{vagasAtivas.length > 3 ? 3 : vagasAtivas.length}
                  </strong>{" "}
                  de <strong>{vagasAtivas.length}</strong> vagas ativas
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled
                    className="dark:text-gray-500 dark:border-gray-600 dark:bg-gray-800"
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-8 p-0 dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                  >
                    1
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                  >
                    Próxima
                  </Button>
                </div>
              </div>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA GERENCIAR VAGAS             */}
            {/* ================================================================== */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
