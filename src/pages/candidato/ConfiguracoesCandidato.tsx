import React, { useState } from "react";
import { SidebarProvider } from "src/components/ui/sidebar";
import { Sheet, SheetContent } from "src/components/ui/sheet";
import { cn } from "src/lib/utils";
import { DashboardNavbar } from "src/components/Dashboards/DashboardNavbar";
import { CandidatoSidebar } from "src/components/Dashboards/Candidatos/CandidatoSidebar";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Switch } from "src/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "src/components/ui/select";
import {
  Bell,
  Check,
  CreditCard,
  //   Globe,
  //   Mail,
  //   Phone,
  Shield,
  //   Upload,
  User,
} from "lucide-react";

// --- Importações para Navegação (Opcional) ---
// import { useNavigate } from 'react-router-dom';

/**
 * Página "Configurações" do Dashboard do Candidato.
 * Permite gerenciar informações da conta, notificações, privacidade e cobrança (se aplicável).
 * Utiliza a estrutura de layout padrão do dashboard.
 */
export default function Configuracoes() {
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

  // --- Dados de Exemplo do Usuário (Estrutura padrão) ---
  const userData = {
    name: "Ana Silva",
    title: "Engenheira de Software Sênior",
    initials: "AS",
    avatarSrc: "https://github.com/shadcn.png", // Usar avatar de exemplo padrão
    messageCount: 3,
    notificationCount: 5,
    // Dados específicos para preencher os campos (substituir por dados reais)
    firstName: "Ana",
    lastName: "Silva",
    email: "ana.silva@exemplo.com",
    phone: "(11) 98765-4321",
    headline: "Engenheira de Software Sênior com 7+ anos de experiência",
    bio: "Engenheira de software apaixonada por construir aplicações web escaláveis e eficientes. Proficiente em React, TypeScript, Node.js e Java.",
    location: "São Paulo, SP",
    website: "https://linkedin.com/in/anasilva-dev", // Exemplo
  };

  // --- Estados para os Switches e Selects (necessário para controle em React) ---
  // Os `defaultChecked` e `defaultValue` do HTML/Next não funcionam diretamente
  // com componentes controlados em React. Você precisaria de `useState` para cada um.
  // Exemplo:
  const [notifications, setNotifications] = useState({
    newJobMatches: true,
    jobApplicationUpdates: true,
    savedJobReminders: true,
    newMessages: true,
    messageReplies: true,
    assessmentInvites: true,
    interviewInvites: true,
    interviewReminders: true,
  });
  const [emailFrequency, setEmailFrequency] = useState("daily");
  const [privacy, setPrivacy] = useState({
    profileVisibility: "all-employers",
    recruiterMessages: true,
    showContactInfo: false, // Exemplo: começa desabilitado
    dataForRecommendations: true,
    anonymousAnalytics: true,
  });

  // Handlers para atualizar os estados (exemplo para um switch)
  const handleSwitchChange = (
    id: keyof typeof notifications,
    checked: boolean
  ) => {
    setNotifications((prev) => ({ ...prev, [id]: checked }));
  };
  const handlePrivacySwitchChange = (
    id: keyof typeof privacy,
    checked: boolean
  ) => {
    // Note que profileVisibility não é boolean, precisa de handler separado ou check
    if (typeof privacy[id] === "boolean") {
      setPrivacy((prev) => ({ ...prev, [id]: checked }));
    }
  };
  const handleSelectChange = (
    id: keyof typeof privacy | string,
    value: string
  ) => {
    if (id === "profileVisibility" || id === "emailFrequency") {
      setPrivacy((prev) => ({ ...prev, profileVisibility: value })); // Ajuste conforme necessário
    }
    if (id === "emailFrequency") {
      setEmailFrequency(value);
    }
  };

  return (
    <SidebarProvider>
      {/* Container principal Flex (Estrutura padrão) */}
      <div className="flex min-h-screen bg-gray-100/50 dark:bg-gray-950">
        {/* --- Sidebar Desktop (Estrutura padrão) --- */}
        <div
          className={cn(
            "hidden lg:flex h-screen sticky top-0 transition-all duration-300 ease-in-out border-r dark:border-gray-800",
            "bg-background dark:bg-gray-900",
            isDesktopSidebarOpen ? "w-64" : "w-16"
          )}
        >
          <CandidatoSidebar
            isOpen={isDesktopSidebarOpen}
            toggleSidebar={toggleDesktopSidebar}
            userName={userData.name}
            userTitle={userData.title}
            userInitials={userData.initials}
            userAvatarSrc={userData.avatarSrc}
            messageCount={userData.messageCount}
            onNavigate={navigateTo}
            activePage="configuracoes" // **IMPORTANTE**: Define a página ativa
          />
        </div>

        {/* --- Sidebar Mobile (Sheet - Estrutura padrão) --- */}
        <Sheet open={isMobileSheetOpen} onOpenChange={setIsMobileSheetOpen}>
          <SheetContent
            side="left"
            className={cn(
              "p-0 w-64 lg:hidden border-r dark:border-gray-800",
              "bg-white dark:bg-gray-900"
            )}
          >
            <CandidatoSidebar
              isOpen={true}
              isMobileView={true}
              userName={userData.name}
              userTitle={userData.title}
              userInitials={userData.initials}
              userAvatarSrc={userData.avatarSrc}
              messageCount={userData.messageCount}
              onNavigate={navigateTo}
              activePage="configuracoes" // **IMPORTANTE**: Define a página ativa
            />
          </SheetContent>
        </Sheet>

        {/* --- Área de Conteúdo Principal (Estrutura padrão) --- */}
        <div className="flex-1 flex flex-col overflow-y-auto min-w-0">
          {/* Navbar Superior (Estrutura padrão) */}
          <DashboardNavbar
            onMobileMenuClick={openMobileSheet}
            userName={userData.name}
            userInitials={userData.initials}
            userAvatarSrc={userData.avatarSrc}
            notificationCount={userData.notificationCount}
          />

          {/* Conteúdo Principal (Main) - Layout padrão */}
          <main className="flex-1 p-4 md:p-6 bg-gray-50/50 dark:bg-gray-950/60 overflow-x-hidden">
            {/* ================================================================== */}
            {/* INÍCIO DO CONTEÚDO ESPECÍFICO DA PÁGINA DE CONFIGURAÇÕES          */}
            {/* ================================================================== */}
            <div className="space-y-6">
              {/* Cabeçalho da Página */}
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Configurações
                </h1>
                <p className="text-muted-foreground dark:text-gray-400">
                  Gerencie as configurações e preferências da sua conta
                </p>
              </div>

              {/* Abas Principais */}
              <Tabs defaultValue="conta" className="w-full">
                {/* Lista de Abas com estilo dark */}
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 lg:w-auto bg-gray-100 dark:bg-gray-800">
                  <TabsTrigger
                    value="conta"
                    className="flex items-center gap-2 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    <User className="h-4 w-4" />
                    <span className="">Conta</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="notificacoes"
                    className="flex items-center gap-2 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    <Bell className="h-4 w-4" />
                    <span className="">Notificações</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="privacidade"
                    className="flex items-center gap-2 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    <Shield className="h-4 w-4" />
                    <span className="">Privacidade</span>
                  </TabsTrigger>
                  {/* Aba de Cobrança - Opcional para candidatos, pode remover se não aplicável */}
                  <TabsTrigger
                    value="cobranca"
                    className="flex items-center gap-2 dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-white dark:text-gray-400"
                  >
                    <CreditCard className="h-4 w-4" />
                    <span className="">Cobrança</span>
                  </TabsTrigger>
                </TabsList>

                {/* Conteúdo da Aba: Conta */}
                <TabsContent value="conta" className="mt-6 space-y-6">
                  {/* Card: Informações da Conta */}
                  {/* <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Informações da Conta
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Atualize suas informações pessoais
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center"> */}
                  {/* Avatar e Botão de Upload */}
                  {/* <div className="flex flex-col items-center space-y-2 w-full md:w-auto">
                          <Avatar className="h-24 w-24 border dark:border-gray-600">
                            <AvatarImage
                              src={userData.avatarSrc}
                              alt={userData.name}
                            />
                            <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                              {userData.initials}
                            </AvatarFallback>
                          </Avatar>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-1 w-full dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                          >
                            <Upload className="h-4 w-4" />
                            <span>Alterar Foto</span>
                          </Button>
                        </div> */}
                  {/* Campos de Informação Pessoal */}
                  {/* <div className="flex-1 space-y-4 w-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="first-name"
                                className="dark:text-gray-300"
                              >
                                Nome
                              </Label>
                              <Input
                                id="first-name"
                                defaultValue={userData.firstName}
                                className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                              />
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="last-name"
                                className="dark:text-gray-300"
                              >
                                Sobrenome
                              </Label>
                              <Input
                                id="last-name"
                                defaultValue={userData.lastName}
                                className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label
                                htmlFor="email"
                                className="dark:text-gray-300"
                              >
                                Email
                              </Label>
                              <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                                  <Mail className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                                </div>
                                <Input
                                  id="email"
                                  type="email"
                                  defaultValue={userData.email}
                                  className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label
                                htmlFor="phone"
                                className="dark:text-gray-300"
                              >
                                Telefone
                              </Label>
                              <div className="flex">
                                <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                                  <Phone className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                                </div>
                                <Input
                                  id="phone"
                                  type="tel"
                                  defaultValue={userData.phone}
                                  className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}

                  {/* Título Profissional */}
                  {/* <div className="space-y-2">
                        <Label
                          htmlFor="headline"
                          className="dark:text-gray-300"
                        >
                          Título Profissional
                        </Label>
                        <Input
                          id="headline"
                          defaultValue={userData.headline}
                          className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div> */}

                  {/* Bio */}
                  {/* <div className="space-y-2">
                        <Label htmlFor="bio" className="dark:text-gray-300">
                          Bio
                        </Label>
                        <Textarea
                          id="bio"
                          rows={4}
                          defaultValue={userData.bio}
                          className="min-h-[100px] bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div> */}

                  {/* Localização e Website */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="location"
                            className="dark:text-gray-300"
                          >
                            Localização
                          </Label>
                          <Input
                            id="location"
                            defaultValue={userData.location}
                            className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="website"
                            className="dark:text-gray-300"
                          >
                            Website
                          </Label>
                          <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 rounded-l-md bg-gray-100 dark:bg-gray-750 dark:border-gray-600">
                              <Globe className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                            </div>
                            <Input
                              id="website"
                              type="url"
                              defaultValue={userData.website}
                              className="rounded-l-none bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Salvar Alterações
                      </Button>
                    </CardFooter>
                  </Card> */}

                  {/* Card: Senha */}
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Senha
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Atualize sua senha
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="current-password"
                          className="dark:text-gray-300"
                        >
                          Senha Atual
                        </Label>
                        <Input
                          id="current-password"
                          type="password"
                          className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="new-password"
                          className="dark:text-gray-300"
                        >
                          Nova Senha
                        </Label>
                        <Input
                          id="new-password"
                          type="password"
                          className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="confirm-password"
                          className="dark:text-gray-300"
                        >
                          Confirmar Nova Senha
                        </Label>
                        <Input
                          id="confirm-password"
                          type="password"
                          className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Atualizar Senha
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Notificações */}
                <TabsContent value="notificacoes" className="mt-6 space-y-6">
                  {/* Card: Preferências de Notificação */}
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Preferências de Notificação
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Escolha como você deseja ser notificado
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 divide-y dark:divide-gray-700">
                      {/* Seção: Alertas de Vaga */}
                      <div className="space-y-4 pt-6 first:pt-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Alertas de Vaga
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="new-job-matches"
                                className="dark:text-gray-300"
                              >
                                Novas Vagas Compatíveis
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber notificações quando novas vagas
                                corresponderem ao seu perfil
                              </p>
                            </div>
                            <Switch
                              id="new-job-matches"
                              checked={notifications.newJobMatches}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("newJobMatches", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="job-application-updates"
                                className="dark:text-gray-300"
                              >
                                Atualizações de Candidatura
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber atualizações sobre suas candidaturas
                              </p>
                            </div>
                            <Switch
                              id="job-application-updates"
                              checked={notifications.jobApplicationUpdates}
                              onCheckedChange={(checked) =>
                                handleSwitchChange(
                                  "jobApplicationUpdates",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="saved-job-reminders"
                                className="dark:text-gray-300"
                              >
                                Lembretes de Vagas Salvas
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber lembretes sobre vagas que você salvou
                              </p>
                            </div>
                            <Switch
                              id="saved-job-reminders"
                              checked={notifications.savedJobReminders}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("savedJobReminders", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Seção: Mensagens */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Mensagens
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="new-messages"
                                className="dark:text-gray-300"
                              >
                                Novas Mensagens
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber notificações para novas mensagens
                              </p>
                            </div>
                            <Switch
                              id="new-messages"
                              checked={notifications.newMessages}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("newMessages", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="message-replies"
                                className="dark:text-gray-300"
                              >
                                Respostas de Mensagens
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Ser notificado quando alguém responder sua
                                mensagem
                              </p>
                            </div>
                            <Switch
                              id="message-replies"
                              checked={notifications.messageReplies}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("messageReplies", checked)
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Seção: Avaliações e Entrevistas */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Avaliações e Entrevistas
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="assessment-invites"
                                className="dark:text-gray-300"
                              >
                                Convites para Avaliação
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber notificações para novos convites de
                                avaliação
                              </p>
                            </div>
                            <Switch
                              id="assessment-invites"
                              checked={notifications.assessmentInvites}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("assessmentInvites", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="interview-invites"
                                className="dark:text-gray-300"
                              >
                                Convites para Entrevista
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Ser notificado sobre convites para entrevista
                              </p>
                            </div>
                            <Switch
                              id="interview-invites"
                              checked={notifications.interviewInvites}
                              onCheckedChange={(checked) =>
                                handleSwitchChange("interviewInvites", checked)
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="interview-reminders"
                                className="dark:text-gray-300"
                              >
                                Lembretes de Entrevista
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Receber lembretes antes das entrevistas
                                agendadas
                              </p>
                            </div>
                            <Switch
                              id="interview-reminders"
                              checked={notifications.interviewReminders}
                              onCheckedChange={(checked) =>
                                handleSwitchChange(
                                  "interviewReminders",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Salvar Preferências
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Card: Frequência de Email */}
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Frequência de Email
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Controle a frequência com que você recebe emails
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="email-frequency"
                          className="dark:text-gray-300"
                        >
                          Frequência do Resumo por Email
                        </Label>
                        <Select
                          value={emailFrequency}
                          onValueChange={(value) =>
                            handleSelectChange("emailFrequency", value)
                          }
                        >
                          {/* Select com estilo dark */}
                          <SelectTrigger
                            id="email-frequency"
                            className="bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                          >
                            <SelectValue placeholder="Selecione a frequência" />
                          </SelectTrigger>
                          <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                            <SelectItem
                              value="realtime"
                              className="dark:text-gray-300 dark:focus:bg-gray-700"
                            >
                              Tempo Real
                            </SelectItem>
                            <SelectItem
                              value="daily"
                              className="dark:text-gray-300 dark:focus:bg-gray-700"
                            >
                              Resumo Diário
                            </SelectItem>
                            <SelectItem
                              value="weekly"
                              className="dark:text-gray-300 dark:focus:bg-gray-700"
                            >
                              Resumo Semanal
                            </SelectItem>
                            <SelectItem
                              value="never"
                              className="dark:text-gray-300 dark:focus:bg-gray-700"
                            >
                              Nunca
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Salvar Preferências
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Privacidade */}
                <TabsContent value="privacidade" className="mt-6 space-y-6">
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Configurações de Privacidade
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Controle sua privacidade e visibilidade
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6 divide-y dark:divide-gray-700">
                      {/* Seção: Visibilidade do Perfil */}
                      <div className="space-y-4 pt-6 first:pt-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Visibilidade do Perfil
                        </h3>
                        <div className="space-y-3">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="profile-visibility"
                                className="dark:text-gray-300"
                              >
                                Quem pode ver seu perfil
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Controle quem pode visualizar as informações
                                completas do seu perfil
                              </p>
                            </div>
                            <Select
                              value={privacy.profileVisibility}
                              onValueChange={(value) =>
                                handleSelectChange("profileVisibility", value)
                              }
                            >
                              <SelectTrigger
                                id="profile-visibility"
                                className="w-full sm:w-[220px] bg-white dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                              >
                                <SelectValue placeholder="Selecione a visibilidade" />
                              </SelectTrigger>
                              <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                                <SelectItem
                                  value="all-employers"
                                  className="dark:text-gray-300 dark:focus:bg-gray-700"
                                >
                                  Todos os Empregadores
                                </SelectItem>
                                <SelectItem
                                  value="applied-only"
                                  className="dark:text-gray-300 dark:focus:bg-gray-700"
                                >
                                  Apenas Empresas Onde me Candidatei
                                </SelectItem>
                                <SelectItem
                                  value="invited-only"
                                  className="dark:text-gray-300 dark:focus:bg-gray-700"
                                >
                                  Apenas Empresas que me Convidaram
                                </SelectItem>
                                <SelectItem
                                  value="hidden"
                                  className="dark:text-gray-300 dark:focus:bg-gray-700"
                                >
                                  Oculto
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Seção: Preferências de Contato */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Preferências de Contato
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="recruiter-messages"
                                className="dark:text-gray-300"
                              >
                                Mensagens de Recrutadores
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Permitir que recrutadores enviem mensagens
                                diretas
                              </p>
                            </div>
                            <Switch
                              id="recruiter-messages"
                              checked={privacy.recruiterMessages as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "recruiterMessages",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="show-contact-info"
                                className="dark:text-gray-300"
                              >
                                Mostrar Informações de Contato
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Exibir suas informações de contato no seu perfil
                              </p>
                            </div>
                            <Switch
                              id="show-contact-info"
                              checked={privacy.showContactInfo as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "showContactInfo",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>

                      {/* Seção: Dados e Privacidade */}
                      <div className="space-y-4 pt-6">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Dados e Privacidade
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="data-for-recommendations"
                                className="dark:text-gray-300"
                              >
                                Usar Dados para Recomendações
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Permitir o uso dos seus dados para melhorar as
                                recomendações de vagas
                              </p>
                            </div>
                            <Switch
                              id="data-for-recommendations"
                              checked={
                                privacy.dataForRecommendations as boolean
                              }
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "dataForRecommendations",
                                  checked
                                )
                              }
                            />
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                              <Label
                                htmlFor="anonymous-analytics"
                                className="dark:text-gray-300"
                              >
                                Análises Anônimas
                              </Label>
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Compartilhar dados de uso anônimos para ajudar a
                                melhorar nossa plataforma
                              </p>
                            </div>
                            <Switch
                              id="anonymous-analytics"
                              checked={privacy.anonymousAnalytics as boolean}
                              onCheckedChange={(checked) =>
                                handlePrivacySwitchChange(
                                  "anonymousAnalytics",
                                  checked
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start space-y-4 border-t dark:border-gray-700 pt-6">
                      <Button className="dark:text-white dark:bg-blue-600 hover:dark:bg-blue-700">
                        Salvar Configurações de Privacidade
                      </Button>
                      {/* Links com estilo dark */}
                      <div className="text-sm text-muted-foreground dark:text-gray-400">
                        <p>
                          Você pode{" "}
                          {/* Substituir # por links reais ou actions */}
                          <a
                            href="/baixar-dados"
                            className="text-primary dark:text-blue-400 underline hover:dark:text-blue-300"
                          >
                            baixar seus dados
                          </a>{" "}
                          ou{" "}
                          <a
                            href="/excluir-conta"
                            className="text-destructive dark:text-red-400 underline hover:dark:text-red-300"
                          >
                            excluir sua conta
                          </a>{" "}
                          a qualquer momento.
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </TabsContent>

                {/* Conteúdo da Aba: Cobrança (Manter ou Remover?) */}
                {/* Esta aba pode não fazer sentido para candidatos. Avalie se deve mantê-la. */}
                <TabsContent value="cobranca" className="mt-6 space-y-6">
                  {/* Card: Plano de Assinatura */}
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Plano de Assinatura
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Gerencie sua assinatura e cobrança (se aplicável)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Detalhes do Plano Atual (Exemplo: Gratuito) */}
                      <div className="rounded-lg border dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-750">
                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                          <div>
                            <h3 className="font-medium text-gray-900 dark:text-white">
                              Plano Gratuito
                            </h3>
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              Recursos básicos de busca e candidatura
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900 dark:text-white">
                              R$ 0
                            </span>
                            <span className="text-sm text-muted-foreground dark:text-gray-400">
                              /mês
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          {/* Botão de Upgrade */}
                          <Button
                            variant="outline"
                            className="w-full sm:w-auto dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                          >
                            Fazer Upgrade para Premium
                          </Button>
                        </div>
                      </div>

                      {/* Lista de Recursos Premium */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          Recursos Premium (Exemplo)
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                          {/* Item de Recurso */}
                          <li className="flex items-center gap-2">
                            {/* Checkmark com fundo */}
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />
                            </div>
                            <span>Status prioritário de candidatura</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />
                            </div>
                            <span>Ver quem visualizou seu perfil</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />
                            </div>
                            <span>Avaliações de habilidades avançadas</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />
                            </div>
                            <span>
                              Mensagens diretas com gerentes de contratação
                            </span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                              <Check className="h-3 w-3 text-primary dark:text-blue-400" />
                            </div>
                            <span>Otimização de currículo por IA</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Card: Métodos de Pagamento */}
                  <Card className="bg-background shadow-sm dark:bg-gray-800 dark:border dark:border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-gray-900 dark:text-white">
                        Métodos de Pagamento
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Gerencie seus métodos de pagamento (se aplicável)
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Mensagem se não houver métodos */}
                      <p className="text-sm text-muted-foreground dark:text-gray-400">
                        Nenhum método de pagamento adicionado ainda.
                      </p>
                      <Button
                        variant="outline"
                        className="gap-2 dark:text-white dark:border-gray-600 hover:dark:bg-gray-700"
                      >
                        <CreditCard className="h-4 w-4" />
                        <span>Adicionar Método de Pagamento</span>
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            {/* ================================================================== */}
            {/* FIM DO CONTEÚDO ESPECÍFICO DA PÁGINA DE CONFIGURAÇÕES             */}
            {/* ================================================================== */}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
