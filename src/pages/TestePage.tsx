import React from "react";
import { Link } from "react-router-dom";
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
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  CheckCircle2,
  Clock,
  FileCheck,
  Users,
} from "lucide-react";
import { RadioGroup, RadioGroupItem } from "src/components/ui/radio-group";
import { Label } from "src/components/ui/label";

const TestsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/30 py-12 dark:bg-gray-900">
      {" "}
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors dark:text-gray-400 dark:hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao Painel de Controle
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400">
            {" "}
            <Clock className="h-4 w-4" />
            <span>Tempo Restante: 45:00</span>
          </div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-2 dark:text-white">
              Centro de Avaliação
            </h1>{" "}
            <p className="text-muted-foreground dark:text-gray-300">
              Complete estas avaliações para mostrar suas habilidades e
              preferências
            </p>{" "}
          </div>

          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium dark:text-white">
                  Progresso Geral
                </span>{" "}
                <span className="text-sm text-muted-foreground dark:text-gray-400">
                  1 de 3 completado
                </span>{" "}
              </div>
              <span className="text-sm font-medium dark:text-white">33%</span>{" "}
            </div>
            <Progress value={33} className="h-2" />
          </div>

          <Tabs defaultValue="logic" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger
                value="logic"
                className="flex items-center gap-2 dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
              >
                <Brain className="h-4 w-4" />
                <span>Lógica</span>
              </TabsTrigger>
              <TabsTrigger
                value="cultural"
                className="flex items-center gap-2 dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
              >
                <Users className="h-4 w-4" />
                <span>Adequação Cultural</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex items-center gap-2 dark:text-white data-[state=active]:bg-zinc-300  data-[state=active]:text-black dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white"
              >
                <FileCheck className="h-4 w-4" />
                <span>Habilidades</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="logic">
              <Card className="border-purple-200/50 dark:border-purple-800/50 shadow-sm dark:bg-gray-800">
                {" "}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="dark:text-white">
                        Avaliação de Raciocínio Lógico
                      </CardTitle>{" "}
                      <CardDescription className="dark:text-gray-300">
                        Teste suas habilidades de resolução de problemas e
                        pensamento analítico
                      </CardDescription>{" "}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white">
                      {" "}
                      <span>Questão</span>
                      <span className="text-purple-600 dark:text-purple-400">
                        3
                      </span>
                      <span>de</span>
                      <span>10</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/10 rounded-lg">
                      <p className="font-medium dark:text-white">
                        {" "}
                        Se todos os Zorks são Morks, e alguns Morks são Borks,
                        qual das seguintes afirmações deve ser verdadeira?
                      </p>
                    </div>

                    <RadioGroup defaultValue="option-1">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-1" id="option-1" />
                          <Label
                            htmlFor="option-1"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Todos os Zorks são Borks
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-2" id="option-2" />
                          <Label
                            htmlFor="option-2"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Alguns Zorks são Borks
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-3" id="option-3" />
                          <Label
                            htmlFor="option-3"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Nenhum Zork é Bork
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-4" id="option-4" />
                          <Label
                            htmlFor="option-4"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Nenhuma das anteriores
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Anterior</Button>
                  <Button>
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="cultural">
              <Card className="border-indigo-200/50 dark:border-indigo-800/50 shadow-sm dark:bg-gray-800">
                {" "}
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="dark:text-white">
                        Avaliação de Adequação Cultural
                      </CardTitle>{" "}
                      <CardDescription className="dark:text-gray-300">
                        Ajude-nos a entender suas preferências e valores de
                        trabalho
                      </CardDescription>{" "}
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white">
                      {" "}
                      <span>Questão</span>
                      <span className="text-indigo-600 dark:text-indigo-400">
                        1
                      </span>
                      <span>de</span>
                      <span>15</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/10 rounded-lg">
                      <p className="font-medium dark:text-white">
                        {" "}
                        Ao trabalhar em um projeto em equipe, eu prefiro:
                      </p>
                    </div>

                    <RadioGroup defaultValue="option-1">
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-1" id="cultural-1" />
                          <Label
                            htmlFor="cultural-1"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Assumir a liderança e delegar tarefas
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-2" id="cultural-2" />
                          <Label
                            htmlFor="cultural-2"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Colaborar de perto com os membros da equipe
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-3" id="cultural-3" />
                          <Label
                            htmlFor="cultural-3"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Focar nas minhas contribuições individuais
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-accent transition-colors dark:border-gray-700 dark:hover:bg-gray-700">
                          {" "}
                          <RadioGroupItem value="option-4" id="cultural-4" />
                          <Label
                            htmlFor="cultural-4"
                            className="flex-1 cursor-pointer dark:text-white"
                          >
                            {" "}
                            Adaptar minha abordagem com base nas necessidades do
                            projeto
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="skills">
              <Card className="border-violet-200/50 dark:border-violet-800/50 shadow-sm dark:bg-gray-800">
                {" "}
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Avaliação de Habilidades
                  </CardTitle>{" "}
                  <CardDescription className="dark:text-gray-300">
                    {" "}
                    Complete as seguintes avaliações para mostrar suas
                    habilidades técnicas e profissionais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4">
                    <div className="flex items-center p-4 border rounded-lg dark:border-gray-700">
                      {" "}
                      <div className="mr-4">
                        <CheckCircle2 className="h-6 w-6 text-green-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Comunicação
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Avaliação de comunicação escrita e verbal
                        </p>{" "}
                      </div>
                      <div>
                        <span className="text-sm font-medium text-green-500">
                          Completado
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border rounded-lg bg-accent/50 dark:border-gray-700 dark:bg-gray-700/50">
                      {" "}
                      <div className="mr-4">
                        <Brain className="h-6 w-6 text-violet-500 dark:text-violet-300" />{" "}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Programação
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Desafios de código e resolução de problemas
                        </p>{" "}
                      </div>
                      <div>
                        <Button size="sm">Começar</Button>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border rounded-lg dark:border-gray-700">
                      {" "}
                      <div className="mr-4">
                        <FileCheck className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium dark:text-white">
                          Análise de Dados
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Pensamento analítico e interpretação de dados
                        </p>{" "}
                      </div>
                      <div>
                        <Button size="sm" variant="outline">
                          Começar
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center p-4 border rounded-lg dark:border-gray-700">
                      {" "}
                      <div className="mr-4">
                        <Users className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium dark:text-white">
                          Gerenciamento de Projetos
                        </h3>{" "}
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Habilidades de planejamento, organização e execução
                        </p>{" "}
                      </div>
                      <div>
                        <Button size="sm" variant="outline">
                          Começar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    {" "}
                    Complete todas as avaliações para maximizar a visibilidade
                    do seu perfil para empregadores potenciais
                  </p>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default TestsPage;
