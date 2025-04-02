import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "src/components/ui/tabs";
import { Progress } from "src/components/ui/progress";
import { Button } from "src/components/ui/button";
import { RadioGroup, RadioGroupItem } from "src/components/ui/radio-group";
import { Label } from "src/components/ui/label";
import {
  ArrowLeft,
  Clock,
  Brain,
  Users,
  FileCheck,
  ArrowRight,
  CheckCircle2, // Ícone para completado
} from "lucide-react";
import { cn } from "src/lib/utils";

// NOTA: A SidebarProvider e hooks relacionados não são necessários aqui,
// pois esta página não terá a sidebar/navbar padrão do dashboard.

// Componente Principal
// NOTA: Renomeado internamente, export default mantém o original
const TestsPage: React.FC = () => {
  const [selectedLogicOption, setSelectedLogicOption] = useState("option-1");
  // Você precisará de estados semelhantes para outras abas/perguntas
  return (
    <div className="min-h-screen bg-gray-100/50 dark:bg-zinc-900/60 p-4 md:p-6">
      {/* Container interno para limitar largura e centralizar, como nas outras páginas */}
      <div className="max-w-5xl mx-auto">
        {" "}
        {/* Ajustado max-width se necessário */}
        {/* Barra Superior (Voltar e Tempo) - CORES PADRONIZADAS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <Link
            to="/dashboard/candidato/avaliacoes" // Ajuste o link de volta se necessário
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-zinc-500 dark:text-gray-400 dark:hover:text-gray-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Avaliações
          </Link>
          <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>Tempo Restante: 45:00</span>{" "}
            {/* Manter ou buscar de estado */}
          </div>
        </div>
        {/* Conteúdo Centralizado */}
        <div className="space-y-8">
          {" "}
          {/* Aumentado espaçamento geral */}
          {/* Cabeçalho Principal - CORES PADRONIZADAS */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2 dark:text-white">
              Centro de Avaliação
            </h1>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto sm:mx-0">
              Complete estas avaliações para mostrar suas habilidades e
              preferências.
            </p>
          </div>
          {/* Barra de Progresso - CORES PADRONIZADAS */}
          <div className="mb-8 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium dark:text-white">
                  Progresso Geral
                </span>
                <span className="text-sm text-muted-foreground dark:text-gray-400">
                  1 de 3 completado {/* Manter ou buscar de estado */}
                </span>
              </div>
              <span className="text-sm font-medium dark:text-white">33%</span>{" "}
              {/* Manter ou buscar de estado */}
            </div>
            {/* Progress usa variáveis CSS, deve adaptar ao tema */}
            <Progress
              value={33}
              className="h-2 bg-zinc-200 dark:bg-zinc-800 [&>*]:bg-purple-600 dark:[&>*]:bg-purple-500"
            />
          </div>
          {/* Sistema de Abas - RESPONSIVIDADE E CORES PADRONIZADAS */}
          <Tabs defaultValue="logic" className="w-full">
            {/* TabsList com responsividade e cores zinc */}
            <TabsList className="flex w-full gap-1 bg-gray-200/50 dark:bg-zinc-800 p-1 rounded-lg mb-8">
              {" "}
              {/* COR PADRONIZADA */}
              <TabsTrigger
                value="logic"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo Responsivo/Cores Padronizadas
              >
                <Brain className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Lógica</span>
              </TabsTrigger>
              <TabsTrigger
                value="cultural"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo Responsivo/Cores Padronizadas
              >
                <Users className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Fit Cultural</span>
              </TabsTrigger>
              <TabsTrigger
                value="skills"
                className="flex flex-1 items-center justify-center gap-1.5 px-3 py-1.5 text-sm rounded-md data-[state=active]:bg-gray-300/70 dark:data-[state=active]:bg-zinc-700 dark:data-[state=active]:text-white dark:text-gray-400 data-[state=inactive]:text-gray-600 data-[state=inactive]:hover:bg-gray-200 dark:data-[state=inactive]:hover:bg-zinc-700 transition-colors" // Estilo Responsivo/Cores Padronizadas
              >
                <FileCheck className="h-4 w-4 flex-shrink-0" />
                <span className="hidden sm:inline">Habilidades</span>
              </TabsTrigger>
            </TabsList>

            {/* Conteúdo Aba: Lógica - COR CARD/RADIO PADRONIZADA */}
            <TabsContent value="logic">
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA */}
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    {" "}
                    {/* Responsividade Header */}
                    <div>
                      <CardTitle className="dark:text-white">
                        Avaliação de Raciocínio Lógico
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Teste suas habilidades de resolução de problemas e
                        pensamento analítico
                      </CardDescription>
                    </div>
                    {/* Contador de Questão */}
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white mt-2 sm:mt-0 flex-shrink-0">
                      <span>Questão</span>
                      {/* Cor Específica Mantida */}
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
                    {/* Bloco da Pergunta - COR PADRONIZADA */}
                    <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      {" "}
                      {/* COR PADRONIZADA */}
                      <p className="font-medium dark:text-white">
                        Se todos os Zorks são Morks, e alguns Morks são Borks,
                        qual das seguintes afirmações deve ser verdadeira?
                      </p>
                    </div>

                    {/* Opções de Resposta - COR/HOVER PADRONIZADO */}
                    <RadioGroup
                      value={selectedLogicOption}
                      onValueChange={setSelectedLogicOption} // Atualiza estado
                    >
                      <div className="space-y-3">
                        {/* Opção 1 */}
                        <Label
                          htmlFor="option-1"
                          className={cn(
                            "flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer",
                            "dark:border-zinc-700",
                            selectedLogicOption === "option-1"
                              ? "bg-purple-100/50 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700" // Estilo Selecionado
                              : "hover:bg-gray-100 dark:hover:bg-zinc-800" // Estilo Hover Padrão
                          )}
                        >
                          <RadioGroupItem value="option-1" id="option-1" />
                          <span className="flex-1 dark:text-gray-100">
                            {" "}
                            {/* Cor texto opção */}
                            Todos os Zorks são Borks
                          </span>
                        </Label>
                        {/* Opção 2 */}
                        <Label
                          htmlFor="option-2"
                          className={cn(
                            "flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer",
                            "dark:border-zinc-700",
                            selectedLogicOption === "option-2"
                              ? "bg-purple-100/50 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700"
                              : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                          )}
                        >
                          <RadioGroupItem value="option-2" id="option-2" />
                          <span className="flex-1 dark:text-gray-100">
                            Alguns Zorks são Borks
                          </span>
                        </Label>
                        {/* Opção 3 */}
                        <Label
                          htmlFor="option-3"
                          className={cn(
                            "flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer",
                            "dark:border-zinc-700",
                            selectedLogicOption === "option-3"
                              ? "bg-purple-100/50 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700"
                              : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                          )}
                        >
                          <RadioGroupItem value="option-3" id="option-3" />
                          <span className="flex-1 dark:text-gray-100">
                            Nenhum Zork é Bork
                          </span>
                        </Label>
                        {/* Opção 4 */}
                        <Label
                          htmlFor="option-4"
                          className={cn(
                            "flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer",
                            "dark:border-zinc-700",
                            selectedLogicOption === "option-4"
                              ? "bg-purple-100/50 border-purple-300 dark:bg-purple-900/20 dark:border-purple-700"
                              : "hover:bg-gray-100 dark:hover:bg-zinc-800"
                          )}
                        >
                          <RadioGroupItem value="option-4" id="option-4" />
                          <span className="flex-1 dark:text-gray-100">
                            Nenhuma das anteriores
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                {/* Footer com Borda e Botões Padronizados */}
                <CardFooter className="flex justify-between border-t dark:border-zinc-700 pt-6">
                  <Button
                    variant="outline"
                    className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                  >
                    {" "}
                    {/* Botão Outline Padrão */}
                    Anterior
                  </Button>
                  {/* Botão Primário Roxo */}
                  <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-colors">
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Conteúdo Aba: Cultural - COR CARD/RADIO PADRONIZADA */}
            <TabsContent value="cultural">
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA */}
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="dark:text-white">
                        Avaliação de Adequação Cultural
                      </CardTitle>
                      <CardDescription className="dark:text-gray-400">
                        Ajude-nos a entender suas preferências e valores de
                        trabalho
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium dark:text-white mt-2 sm:mt-0 flex-shrink-0">
                      <span>Questão</span>
                      {/* Cor Específica Mantida */}
                      <span className="text-purple-600 dark:text-purple-400">
                        1
                      </span>
                      <span>de</span>
                      <span>15</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {/* Bloco da Pergunta - COR PADRONIZADA */}
                    <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
                      {" "}
                      {/* COR PADRONIZADA */}
                      <p className="font-medium dark:text-white">
                        Ao trabalhar em um projeto em equipe, eu prefiro:
                      </p>
                    </div>

                    {/* Opções de Resposta - COR/HOVER PADRONIZADO */}
                    {/* Adicionar estado para esta pergunta se necessário */}
                    <RadioGroup defaultValue="cultural-1">
                      <div className="space-y-3">
                        <Label
                          htmlFor="cultural-1"
                          className="flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800" // Estilo Hover Padrão
                        >
                          <RadioGroupItem value="cultural-1" id="cultural-1" />
                          <span className="flex-1 dark:text-gray-100">
                            Assumir a liderança e delegar tarefas
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-2"
                          className="flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        >
                          <RadioGroupItem value="cultural-2" id="cultural-2" />
                          <span className="flex-1 dark:text-gray-100">
                            Colaborar de perto com os membros da equipe
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-3"
                          className="flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        >
                          <RadioGroupItem value="cultural-3" id="cultural-3" />
                          <span className="flex-1 dark:text-gray-100">
                            Focar nas minhas contribuições individuais
                          </span>
                        </Label>
                        <Label
                          htmlFor="cultural-4"
                          className="flex items-center space-x-3 border p-3 rounded-md transition-colors cursor-pointer dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800"
                        >
                          <RadioGroupItem value="cultural-4" id="cultural-4" />
                          <span className="flex-1 dark:text-gray-100">
                            Adaptar minha abordagem com base nas necessidades do
                            projeto
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t dark:border-zinc-700 pt-6">
                  {" "}
                  {/* Footer com Borda */}
                  {/* Botão Primário Roxo */}
                  <Button className="bg-purple-800 text-white hover:bg-purple-900 transition-colors">
                    Próxima Questão
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Conteúdo Aba: Habilidades - COR CARD/LISTA/BOTÃO PADRONIZADA */}
            <TabsContent value="skills">
              <Card className="bg-background shadow-sm dark:bg-zinc-900 dark:border dark:border-zinc-700">
                {" "}
                {/* COR PADRONIZADA */}
                <CardHeader>
                  <CardTitle className="dark:text-white">
                    Avaliação de Habilidades
                  </CardTitle>
                  <CardDescription className="dark:text-gray-400">
                    Complete as seguintes avaliações para mostrar suas
                    habilidades técnicas e profissionais
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {" "}
                  {/* Ajustado para space-y-4 */}
                  {/* Lista de Avaliações */}
                  <div className="space-y-3">
                    {" "}
                    {/* Usando space-y para espaçamento consistente */}
                    {/* Item Completado */}
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/30">
                      {" "}
                      {/* Borda/BG Padrão */}
                      <div className="mr-4 flex-shrink-0">
                        {/* Cor Verde Mantida para Completado */}
                        <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {" "}
                        {/* Para truncar se necessário */}
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Comunicação
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Avaliação de comunicação escrita e verbal
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {/* Cor Verde Mantida */}
                        <span className="text-sm font-medium text-green-500 dark:text-green-400">
                          Completado
                        </span>
                      </div>
                    </div>
                    {/* Item Pendente (Programação) */}
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      {" "}
                      {/* Borda/Hover Padrão */}
                      <div className="mr-4 flex-shrink-0">
                        {/* Cor Violeta Mantida */}
                        <Brain className="h-6 w-6 text-violet-500 dark:text-violet-300" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Habilidades de Programação
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Desafios de código e resolução de problemas
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {/* Botão Primário Roxo */}
                        <Button
                          size="sm"
                          className="bg-purple-800 text-white hover:bg-purple-900 transition-colors"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                    {/* Item Pendente (Análise) */}
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      {" "}
                      {/* Borda/Hover Padrão */}
                      <div className="mr-4 flex-shrink-0">
                        <FileCheck className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                        {/* Cor Padrão Muted */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Análise de Dados
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Pensamento analítico e interpretação de dados
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {/* Botão Outline Padrão */}
                        <Button
                          size="sm"
                          variant="outline"
                          className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                    {/* Item Pendente (Gerenciamento) */}
                    <div className="flex items-center p-4 border rounded-lg dark:border-zinc-700 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                      {" "}
                      {/* Borda/Hover Padrão */}
                      <div className="mr-4 flex-shrink-0">
                        <Users className="h-6 w-6 text-muted-foreground dark:text-gray-400" />{" "}
                        {/* Cor Padrão Muted */}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium dark:text-white">
                          Gerenciamento de Projetos
                        </h3>
                        <p className="text-sm text-muted-foreground dark:text-gray-400">
                          Habilidades de planejamento, organização e execução
                        </p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        {/* Botão Outline Padrão */}
                        <Button
                          size="sm"
                          variant="outline"
                          className="dark:text-white dark:border-zinc-600 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                        >
                          Começar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t dark:border-zinc-700 pt-6">
                  {" "}
                  {/* Footer com Borda */}
                  <p className="text-sm text-muted-foreground dark:text-gray-400">
                    Complete todas as avaliações para maximizar a visibilidade
                    do seu perfil para empregadores potenciais.
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
