import React, { useState } from "react";
import {
  BarChart3,
  Bell,
  BookOpen,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Edit,
  FileCheck,
  Heart,
  MessageSquare,
  Search,
  Settings,
  Star,
  User,
  Users,
  Menu,
} from "lucide-react";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Progress } from "src/components/ui/progress";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "src/components/ui/sidebar";

interface CandidateDashboardProps {
  // Definir props aqui se necessário, e.g., dados do usuário
  // userData: UserDataType;
}

const CandidateDashboard: React.FC<CandidateDashboardProps> = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Estado para controlar a abertura/fechamento da Sidebar

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <SidebarProvider>
      {" "}
      {/* Envolve todo o conteúdo com o SidebarProvider */}
      <div className="min-h-screen bg-background dark:bg-gray-900">
        <div className="flex">
          {/* Sidebar */}
          <Sidebar className="lg:flex flex-col w-64 border-r h-screen sticky top-0 dark:border-gray-700">
            <SidebarHeader className="p-4 border-b dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
                  </div>
                </div>
                <span className="text-xl font-bold dark:text-white">Nexus</span>
              </div>
            </SidebarHeader>
            <SidebarContent className="flex-1 py-4">
              <SidebarMenu className="space-y-1 px-2">
                {/*  Links da Sidebar  */}
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium dark:text-white"
                    >
                      <BarChart3 className="h-5 w-5" />
                      <span>Painel de Controle</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <User className="h-5 w-5" />
                      <span>Meu Perfil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <Building2 className="h-5 w-5" />
                      <span>Vagas Compatíveis</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <FileCheck className="h-5 w-5" />
                      <span>Avaliações</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <MessageSquare className="h-5 w-5" />
                      <span>Mensagens</span>
                      <Badge className="ml-auto bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400">
                        3
                      </Badge>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <Heart className="h-5 w-5" />
                      <span>Vagas Salvas</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <Calendar className="h-5 w-5" />
                      <span>Entrevistas</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link
                      to="#"
                      className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <Settings className="h-5 w-5" />
                      <span>Configurações</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t dark:border-gray-700">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=40&width=40"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium dark:text-white">
                    Jane Doe
                  </p>
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    Engenheira de Software
                  </p>
                </div>
              </div>
            </SidebarFooter>
          </Sidebar>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header com botão para recolher a Sidebar */}
            <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 dark:border-gray-700 dark:bg-gray-900">
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                onClick={toggleSidebar}
              >
                <Menu className="h-4 w-4" />
                <span className="sr-only">Toggle sidebar</span>
              </Button>

              {/* Logo visível em telas menores  */}
              <div className="lg:hidden flex items-center gap-2">
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
                  </div>
                </div>
                <span className="text-xl font-bold dark:text-white">Nexus</span>
              </div>
              <div className="w-full flex-1">
                <form>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />
                    <input
                      type="search"
                      placeholder="Pesquisar por vagas, empresas..."
                      className="w-full rounded-md border border-input bg-background pl-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:w-2/3 lg:w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:placeholder-gray-400"
                    />
                  </div>
                </form>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full relative"
              >
                <Bell className="h-4 w-4 dark:text-white" />
                <span className="sr-only">Notificações</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-purple-600 text-[10px] font-medium text-white flex items-center justify-center">
                  5
                </span>
              </Button>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="User"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </header>

            <main className="grid gap-6 p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold tracking-tight dark:text-white">
                    Bem-vinda de volta, Jane!
                  </h1>
                  <p className="text-muted-foreground dark:text-gray-400">
                    Veja o que está acontecendo com sua busca por emprego
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1 dark:text-white"
                  >
                    <Edit className="h-3.5 w-3.5" />
                    <span>Editar Perfil</span>
                  </Button>
                  <Button size="sm" className="h-8">
                    <Search className="h-3.5 w-3.5 mr-1" />
                    Encontrar Vagas
                  </Button>
                </div>
              </div>

              {/* Profile Completion Card */}
              <Card className="border-purple-200/50 dark:border-purple-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="dark:text-white">
                    Progresso do Perfil
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Complete seu perfil para aumentar sua visibilidade para os
                    empregadores
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium dark:text-white">
                          Progresso Geral
                        </span>
                      </div>
                      <span className="text-sm font-medium dark:text-white">
                        75%
                      </span>
                    </div>
                    <Progress value={75} className="h-2" />

                    <div className="grid gap-4 md:grid-cols-3">
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                          <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium dark:text-white">
                            Informações Básicas
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Completo
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                          <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium dark:text-white">
                            Experiência Profissional
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Completo
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="mt-0.5 h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center dark:bg-yellow-900/30">
                          <Clock className="h-3 w-3 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium dark:text-white">
                            Avaliação de Habilidades
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            1 de 3 completados
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="w-full">
                    Completar Seu Perfil
                  </Button>
                </CardFooter>
              </Card>

              {/* Assessment Status */}
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-indigo-200/50 dark:border-indigo-800/50">
                  <CardHeader>
                    <CardTitle className="dark:text-white">
                      Status das Avaliações
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Complete todas as avaliações para maximizar suas
                      combinações de vagas
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center p-3 bg-green-50 dark:bg-green-900/10 rounded-md">
                        <div className="mr-4">
                          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Avaliação de Lógica
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Completado em 15 de Março de 2025
                          </p>
                        </div>
                        <div>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400">
                            92%
                          </Badge>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/10 rounded-md">
                        <div className="mr-4">
                          <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Avaliação de Adequação Cultural
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Em progresso
                          </p>
                        </div>
                        <div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-7 text-xs"
                          >
                            Continuar
                          </Button>
                        </div>
                      </div>

                      <div className="flex items-center p-3 bg-background rounded-md border dark:border-gray-700">
                        <div className="mr-4">
                          <Brain className="h-5 w-5 text-muted-foreground dark:text-gray-400" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Avaliação de Habilidades Técnicas
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Não iniciado
                          </p>
                        </div>
                        <div>
                          <Button size="sm" className="h-7 text-xs">
                            Começar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="/tests"
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Ver todas as avaliações
                    </Link>
                  </CardFooter>
                </Card>

                {/* Job Matches */}
                <Card className="border-violet-200/50 dark:border-violet-800/50">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle className="dark:text-white">
                          Vagas Compatíveis
                        </CardTitle>
                        <CardDescription className="dark:text-gray-300">
                          Baseado no seu perfil e avaliações
                        </CardDescription>
                      </div>
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400">
                        12 Novas
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-gray-700">
                        <div className="mr-4 mt-1">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="TechCorp"
                            />
                            <AvatarFallback>TC</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium dark:text-white">
                              Desenvolvedor Frontend Sênior
                            </h3>
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400">
                              95% Compatível
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            TechCorp Inc. • San Francisco, CA (Remoto)
                          </p>
                          <div className="flex gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              React
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              TypeScript
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              +3
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-gray-700">
                        <div className="mr-4 mt-1">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="InnovateLabs"
                            />
                            <AvatarFallback>IL</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium dark:text-white">
                              Engenheiro Full Stack
                            </h3>
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400">
                              88% Compatível
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            InnovateLabs • Nova York, NY (Híbrido)
                          </p>
                          <div className="flex gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              Node.js
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              React
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              +4
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start p-3 bg-background rounded-md border hover:border-purple-300 dark:hover:border-purple-700 transition-colors cursor-pointer dark:border-gray-700">
                        <div className="mr-4 mt-1">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src="/placeholder.svg?height=32&width=32"
                              alt="FutureWave"
                            />
                            <AvatarFallback>FW</AvatarFallback>
                          </Avatar>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="text-sm font-medium dark:text-white">
                              Desenvolvedor UI/UX
                            </h3>
                            <Badge className="bg-violet-100 text-violet-800 hover:bg-violet-100 dark:bg-violet-900/30 dark:text-violet-400">
                              82% Compatível
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            FutureWave • Austin, TX (Presencial)
                          </p>
                          <div className="flex gap-2 mt-1">
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              Figma
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              CSS
                            </Badge>
                            <Badge
                              variant="outline"
                              className="text-xs h-5 px-1.5"
                            >
                              +2
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Link
                      to="#"
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Ver todas as combinações
                    </Link>
                    <Button size="sm">Candidate-se Agora</Button>
                  </CardFooter>
                </Card>
              </div>

              {/* Activity and Upcoming */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="dark:text-white">
                      Atividade Recente
                    </CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Suas últimas interações e atualizações
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-7 w-7 rounded-full bg-purple-100 flex items-center justify-center dark:bg-purple-900/30">
                          <Building2 className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <p className="text-sm dark:text-white">
                            <span className="font-medium">TechCorp Inc.</span>{" "}
                            visualizou seu perfil
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            2 horas atrás
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-7 w-7 rounded-full bg-indigo-100 flex items-center justify-center dark:bg-indigo-900/30">
                          <MessageSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <div>
                          <p className="text-sm dark:text-white">
                            <span className="font-medium">
                              Sarah da InnovateLabs
                            </span>{" "}
                            enviou uma mensagem para você
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Ontem às 15:45
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-7 w-7 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                          <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm dark:text-white">
                            Você completou a{" "}
                            <span className="font-medium">
                              Avaliação de Lógica
                            </span>
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            15 de Março de 2025
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 h-7 w-7 rounded-full bg-violet-100 flex items-center justify-center dark:bg-violet-900/30">
                          <Star className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div>
                          <p className="text-sm dark:text-white">
                            Você salvou{" "}
                            <span className="font-medium">
                              Desenvolvedor Frontend na CloudTech
                            </span>{" "}
                            nos favoritos
                          </p>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            14 de Março de 2025
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="#"
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Ver toda a atividade
                    </Link>
                  </CardFooter>
                </Card>

                {/* Upcoming */}
                <Card>
                  <CardHeader>
                    <CardTitle className="dark:text-white">Próximos</CardTitle>
                    <CardDescription className="dark:text-gray-300">
                      Entrevistas e eventos agendados
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start p-3 bg-purple-50 dark:bg-purple-900/10 rounded-md">
                        <div className="mr-4 mt-1">
                          <div className="h-10 w-10 rounded-md bg-purple-100 dark:bg-purple-900/30 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-purple-600 dark:text-purple-400">
                              MAR
                            </span>
                            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                              25
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Entrevista Técnica
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            TechCorp Inc. • 14:00 - 15:00
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock className="h-3 w-3 text-muted-foreground dark:text-gray-400" />
                            <span className="text-xs text-muted-foreground dark:text-gray-400">
                              Chamada de Vídeo
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs"
                        >
                          Preparar
                        </Button>
                      </div>

                      <div className="flex items-start p-3 bg-background rounded-md border dark:border-gray-700">
                        <div className="mr-4 mt-1">
                          <div className="h-10 w-10 rounded-md bg-indigo-100 dark:bg-indigo-900/30 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                              MAR
                            </span>
                            <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                              28
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Prazo para Desafio de Código
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            InnovateLabs • Até 23:59
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <BookOpen className="h-3 w-3 text-muted-foreground dark:text-gray-400" />
                            <span className="text-xs text-muted-foreground dark:text-gray-400">
                              Tarefa para Casa
                            </span>
                          </div>
                        </div>
                        <Button size="sm" className="h-7 text-xs">
                          Começar
                        </Button>
                      </div>

                      <div className="flex items-start p-3 bg-background rounded-md border dark:border-gray-700">
                        <div className="mr-4 mt-1">
                          <div className="h-10 w-10 rounded-md bg-violet-100 dark:bg-violet-900/30 flex flex-col items-center justify-center">
                            <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
                              ABR
                            </span>
                            <span className="text-sm font-bold text-violet-600 dark:text-violet-400">
                              02
                            </span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-medium dark:text-white">
                            Feira de Carreiras Virtual
                          </h3>
                          <p className="text-xs text-muted-foreground dark:text-gray-400">
                            Plataforma Nexus • 10:00 - 14:00
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Users className="h-3 w-3 text-muted-foreground dark:text-gray-400" />
                            <span className="text-xs text-muted-foreground dark:text-gray-400">
                              Foco na Indústria de Tecnologia
                            </span>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-7 text-xs"
                        >
                          RSVP
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link
                      to="#"
                      className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Ver calendário
                    </Link>
                  </CardFooter>
                </Card>
              </div>

              {/* Learning Resources */}
              <Card>
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Recursos Recomendados
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    Recursos de aprendizado personalizados para aprimorar suas
                    habilidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-gray-700">
                      <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all dark:bg-purple-500/30 dark:group-hover:bg-purple-800/50"></div>
                      <div className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                          <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="mb-1 text-sm font-bold dark:text-white">
                          Padrões Avançados do React
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400">
                          Aprenda padrões avançados do React para melhorar suas
                          habilidades de desenvolvimento frontend.
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="text-xs dark:text-gray-300"
                          >
                            15 Lições
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-gray-700">
                      <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all dark:bg-indigo-500/30 dark:group-hover:bg-indigo-800/50"></div>
                      <div className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                          <FileCheck className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                        </div>
                        <h3 className="mb-1 text-sm font-bold dark:text-white">
                          Preparação para Entrevista Técnica
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400">
                          Pratique perguntas comuns de entrevistas de código e
                          desafios de design de sistemas.
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="text-xs dark:text-gray-300"
                          >
                            8 Testes Práticos
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-lg border bg-background hover:shadow-md transition-all dark:border-gray-700">
                      <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-all dark:bg-violet-500/30 dark:group-hover:bg-violet-800/50"></div>
                      <div className="p-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                          <Users className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                        </div>
                        <h3 className="mb-1 text-sm font-bold dark:text-white">
                          Estratégias de Networking
                        </h3>
                        <p className="text-xs text-muted-foreground mb-3 dark:text-gray-400">
                          Aprenda estratégias eficazes de networking para
                          expandir suas conexões profissionais.
                        </p>
                        <div className="flex items-center justify-between">
                          <Badge
                            variant="outline"
                            className="text-xs dark:text-gray-300"
                          >
                            5 Workshops
                          </Badge>
                          <ChevronRight className="h-4 w-4 text-muted-foreground dark:text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link
                    to="#"
                    className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    Ver todos os recursos
                  </Link>
                  <Button variant="outline" size="sm">
                    Avaliação de Habilidade
                  </Button>
                </CardFooter>
              </Card>
            </main>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default CandidateDashboard;
