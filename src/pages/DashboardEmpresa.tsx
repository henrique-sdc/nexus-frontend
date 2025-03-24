import React from "react";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Badge } from "src/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import {
  BarChart3,
  Brain,
  Building2,
  FileCheck,
  Filter,
  MessageSquare,
  Search,
  Settings,
  Star,
  Users,
} from "lucide-react";

const CompanyDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900">
      {" "}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden lg:flex flex-col w-64 border-r h-screen sticky top-0 dark:border-gray-700">
          {" "}
          <div className="p-4 border-b dark:border-gray-700">
            {" "}
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
                </div>
              </div>
              <span className="text-xl font-bold dark:text-white">Nexus</span>{" "}
            </div>
          </div>
          <div className="flex-1 py-4">
            <nav className="space-y-1 px-2">
              <Link
                to="#"
                className="flex items-center gap-3 rounded-md bg-accent px-3 py-2 text-sm font-medium dark:bg-gray-800 dark:text-white"
              >
                <Users className="h-5 w-5" />
                <span>Candidatos</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Building2 className="h-5 w-5" />
                <span>Vagas</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Mensagens</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <BarChart3 className="h-5 w-5" />
                <span>Análises</span>
              </Link>
              <Link
                to="#"
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <Settings className="h-5 w-5" />
                <span>Configurações</span>
              </Link>
            </nav>
          </div>
          <div className="p-4 border-t dark:border-gray-700">
            {" "}
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Company Logo"
                />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium dark:text-white">
                  TechCorp Inc.
                </p>{" "}
                <p className="text-xs text-muted-foreground dark:text-gray-400">
                  Conta de Administrador
                </p>{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-6 dark:border-gray-700 dark:bg-gray-900">
            {" "}
            {}
            <div className="lg:hidden flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-indigo-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-white/20 blur-[2px]"></div>
                </div>
              </div>
              <span className="text-xl font-bold dark:text-white">Nexus</span>{" "}
            </div>
            <div className="w-full flex-1">
              <form>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground dark:text-gray-400" />{" "}
                  <Input
                    type="search"
                    placeholder="Pesquisar candidatos, habilidades ou cargos..."
                    className="w-full bg-background pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
              </form>
            </div>
            <Button variant="outline" size="icon" className="rounded-full">
              <Settings className="h-4 w-4 dark:text-white" />{" "}
              <span className="sr-only">Configurações</span>
            </Button>
            <Avatar>
              <AvatarImage
                src="/placeholder.svg?height=40&width=40"
                alt="Company Logo"
              />
              <AvatarFallback>TC</AvatarFallback>
            </Avatar>
          </header>

          <main className="grid gap-6 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight dark:text-white">
                  Busca de Candidatos
                </h1>{" "}
                <p className="text-muted-foreground dark:text-gray-400">
                  Encontre o candidato perfeito para sua equipe
                </p>{" "}
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-8 gap-1">
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filtros</span>
                </Button>
                <Button size="sm" className="h-8">
                  Publicar uma Vaga
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="dark:bg-gray-800">
                {" "}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium dark:text-white">
                    Total de Candidatos
                  </CardTitle>{" "}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">
                    1.248
                  </div>{" "}
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +24 esta semana
                  </p>{" "}
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800">
                {" "}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium dark:text-white">
                    Pré-selecionados
                  </CardTitle>{" "}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">36</div>{" "}
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +5 esta semana
                  </p>{" "}
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800">
                {" "}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium dark:text-white">
                    Entrevistas Agendadas
                  </CardTitle>{" "}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">12</div>{" "}
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +3 esta semana
                  </p>{" "}
                </CardContent>
              </Card>
              <Card className="dark:bg-gray-800">
                {" "}
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium dark:text-white">
                    Vagas Abertas
                  </CardTitle>{" "}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold dark:text-white">8</div>{" "}
                  <p className="text-xs text-muted-foreground dark:text-gray-400">
                    +2 esta semana
                  </p>{" "}
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between">
                <TabsList className="dark:bg-gray-800 dark:border-gray-700 rounded-md p-1">
                  {" "}
                  <TabsTrigger
                    value="all"
                    className="dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
                  >
                    Todos os Candidatos
                  </TabsTrigger>{" "}
                  <TabsTrigger
                    value="recommended"
                    className="dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
                  >
                    Recomendados
                  </TabsTrigger>{" "}
                  <TabsTrigger
                    value="shortlisted"
                    className="dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
                  >
                    Pré-selecionados
                  </TabsTrigger>{" "}
                </TabsList>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground dark:text-gray-400">
                    Ordenar por:
                  </span>{" "}
                  <select className="h-8 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                    {" "}
                    {}
                    <option>Relevância</option>
                    <option>Recente</option>
                    <option>Experiência</option>
                  </select>
                </div>
              </div>

              <TabsContent value="all" className="mt-4">
                <div className="grid gap-4">
                  {/* Candidate Card 1 */}
                  <Card className="overflow-hidden dark:bg-gray-800">
                    {" "}
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src="/placeholder.svg?height=50&width=50"
                                alt="Candidate"
                              />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                Jane Doe
                              </h3>{" "}
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Engenheira de Software Sênior
                              </p>{" "}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400">
                              98% de Compatibilidade
                            </Badge>
                            <Button variant="ghost" size="icon">
                              <Star className="h-4 w-4 dark:text-white" />{" "}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Habilidades
                            </h4>{" "}
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">React</Badge>
                              <Badge variant="outline">TypeScript</Badge>
                              <Badge variant="outline">Node.js</Badge>
                              <Badge variant="outline">GraphQL</Badge>
                              <Badge variant="outline">AWS</Badge>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Experiência
                            </h4>{" "}
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              Mais de 7 anos de experiência em desenvolvimento
                              full-stack com foco em aplicações web escaláveis.
                            </p>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Brain className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                              <span className="text-sm dark:text-white">
                                Lógica: 95%
                              </span>{" "}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                              <span className="text-sm dark:text-white">
                                Cultural: 92%
                              </span>{" "}
                            </div>
                            <div className="flex items-center gap-2">
                              <FileCheck className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                              <span className="text-sm dark:text-white">
                                Habilidades: 98%
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent/50 p-6 flex flex-col justify-between md:w-1/3 dark:bg-gray-700/50">
                        {" "}
                        {}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Localização
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              San Francisco, CA (Remoto)
                            </p>{" "}
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Educação
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              Mestrado em Ciência da Computação, Universidade de
                              Stanford
                            </p>{" "}
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Disponibilidade
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              2 semanas de aviso prévio
                            </p>{" "}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button>Ver Perfil Completo</Button>
                          <Button variant="outline">Contato</Button>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Candidate Card 2 */}
                  <Card className="overflow-hidden dark:bg-gray-800">
                    {" "}
                    <div className="flex flex-col md:flex-row">
                      <div className="p-6 md:w-2/3">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage
                                src="/placeholder.svg?height=50&width=50"
                                alt="Candidate"
                              />
                              <AvatarFallback>MS</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold dark:text-white">
                                Michael Smith
                              </h3>{" "}
                              <p className="text-sm text-muted-foreground dark:text-gray-400">
                                Gerente de Produto
                              </p>{" "}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-400">
                              85% de Compatibilidade
                            </Badge>
                            <Button variant="ghost" size="icon">
                              <Star className="h-4 w-4 dark:text-white" />{" "}
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Habilidades
                            </h4>{" "}
                            <div className="flex flex-wrap gap-2">
                              <Badge variant="outline">
                                Estratégia de Produto
                              </Badge>
                              <Badge variant="outline">Ágil</Badge>
                              <Badge variant="outline">
                                Pesquisa de Usuário
                              </Badge>
                              <Badge variant="outline">Roadmapping</Badge>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Experiência
                            </h4>{" "}
                            <p className="text-sm text-muted-foreground dark:text-gray-400">
                              {" "}
                              5 anos de experiência em gerenciamento de produtos
                              para produtos SaaS com foco em soluções B2B.
                            </p>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Brain className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                              <span className="text-sm dark:text-white">
                                Lógica: 88%
                              </span>{" "}
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                              <span className="text-sm dark:text-white">
                                Cultural: 90%
                              </span>{" "}
                            </div>
                            <div className="flex items-center gap-2">
                              <FileCheck className="h-4 w-4 text-violet-600 dark:text-violet-400" />
                              <span className="text-sm dark:text-white">
                                Habilidades: 85%
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-accent/50 p-6 flex flex-col justify-between md:w-1/3 dark:bg-gray-700/50">
                        {" "}
                        {}
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Localização
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              Nova York, NY
                            </p>{" "}
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Educação
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              MBA, Harvard Business School
                            </p>{" "}
                          </div>

                          <div>
                            <h4 className="text-sm font-medium mb-1 dark:text-white">
                              Disponibilidade
                            </h4>{" "}
                            <p className="text-sm dark:text-gray-300">
                              Imediata
                            </p>{" "}
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button>Ver Perfil Completo</Button>
                          <Button variant="outline">Contato</Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="mt-4">
                <Card className="dark:bg-gray-800">
                  {" "}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center py-8">
                      <div className="text-center">
                        <img
                          src="/placeholder.svg?height=120&width=120"
                          width={120}
                          height={120}
                          alt="Recomendações de IA"
                          className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2 dark:text-white">
                          Recomendações com IA
                        </h3>{" "}
                        <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-300">
                          {" "}
                          Nossa IA está analisando os requisitos da sua vaga e
                          os perfis dos candidatos para fornecer recomendações
                          personalizadas.
                        </p>
                        <Button>Gerar Recomendações</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shortlisted" className="mt-4">
                <Card className="dark:bg-gray-800">
                  {" "}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center py-8">
                      <div className="text-center">
                        <img
                          src="/placeholder.svg?height=120&width=120"
                          width={120}
                          height={120}
                          alt="Candidatos pré-selecionados"
                          className="mx-auto mb-4"
                        />
                        <h3 className="text-lg font-medium mb-2 dark:text-white">
                          Nenhum Candidato Pré-selecionado Ainda
                        </h3>{" "}
                        <p className="text-muted-foreground max-w-md mx-auto mb-4 dark:text-gray-300">
                          {" "}
                          Comece a pré-selecionar candidatos clicando no ícone
                          de estrela nos perfis que correspondem às suas
                          necessidades.
                        </p>
                        <Button variant="outline">
                          Ver Todos os Candidatos
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground dark:text-gray-400">
                {" "}
                Exibindo <strong>2</strong> de <strong>1.248</strong> candidatos
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="w-8 p-0">
                  1
                </Button>
                <Button variant="outline" size="sm" className="w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="w-8 p-0">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Próximo
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
