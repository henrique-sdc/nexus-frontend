import React from "react";
import NavBar from "src/components/NavBar/NavBar";
import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Brain, FileCheck, Users } from "lucide-react";
import Footer from "src/components/Footer/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";

// Página de Candidatos
export default function CandidatosPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* NavBar */}
      <NavBar />

      {/* Conteúdo principal */}
      <main className="flex-1">
        {/* Seção: Unificando o Recrutamento com Conexões Potencializadas por IA */}
        <section className="relative overflow-hidden py-24 md:py-32">
          {/* Fundo para modo claro */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:hidden -z-10"></div>
          {/* Fundo para modo escuro */}
          <div className="absolute inset-0 hidden dark:block -z-10">
            <div className="absolute inset-0 bg-black opacity-100"></div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(128,0,128,0.4) 0%, rgba(75,0,130,0.4) 70%)",
              }}
            />
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col items-center justify-center gap-10 lg:gap-20 text-center">
              {/* Coluna única com o texto centralizado */}
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-500/30 px-3 py-1 text-sm dark:text-white">
                  Para Quem Busca Vagas
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                  Um Perfil,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 pr-0.5">
                    Oportunidades Infinitas
                  </span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-200">
                  Crie um perfil completo, faça nossos testes uma única vez e
                  desbloqueie um mundo de oportunidades de emprego compatíveis
                  com suas habilidades e preferências.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button
                    className="bg-black text-white hover:bg-purple-800 hover:text-white transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <Link to="/register">Crie Seu Perfil</Link>
                  </Button>
                  {/* <Button
                    className="bg-white hover:bg-gray-200 dark:hover:bg-zinc-400 transition-all duration-100"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <div className="dark:text-black hover:bg-gray-100 hover:text-black transition-all duration-300">
                      <Link to="#como-funciona">Saiba Como Funciona</Link>
                    </div>
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Como Funciona Para Candidatos */}
        <section id="como-funciona" className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Como Funciona Para Candidatos
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Nosso processo simplificado torna a busca de emprego mais
                eficiente e eficaz.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-4">
              {/* Passo 1: Crie Seu Perfil */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-purple-100 dark:bg-purple-700 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <span className="text-xl font-bold text-purple-600 dark:text-purple-400">
                    1
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Crie Seu Perfil
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Construa um perfil completo que exiba suas habilidades,
                  experiência e preferências profissionais.
                </p>
              </div>

              {/* Passo 2: Complete os Testes */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                    2
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Complete os Testes
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Realize nossos testes de lógica, adequação cultural e
                  habilidades para validar seu perfil.
                </p>
              </div>

              {/* Passo 3: Seja Correspondido */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-violet-100 dark:bg-violet-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <span className="text-xl font-bold text-violet-600 dark:text-violet-400">
                    3
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Seja Correspondido
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Nosso algoritmo de IA conecta você com empresas que buscam
                  exatamente o seu perfil.
                </p>
              </div>

              {/* Passo 4: Conecte-se */}
              <div className="relative">
                <div className="absolute top-0 right-0 -z-10 h-24 w-24 rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/20 blur-xl"></div>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-fuchsia-100 dark:bg-fuchsia-900/30">
                  <span className="text-xl font-bold text-fuchsia-600 dark:text-fuchsia-400">
                    4
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Conecte-se
                </h3>
                <p className="text-muted-foreground dark:text-stone-200">
                  Interaja com empregadores interessados e participe de
                  entrevistas para as vagas ideais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Principais Benefícios */}
        <section className="relative py-16 md:py-24">
          {" "}
          {/* Removido o bg-gradient daqui */}
          {/* Fundo com gradiente (igual ao da outra seção) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          {/* Overlay preto semitransparente apenas no dark mode (igual ao da outra seção) */}
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            {" "}
            {/* Adicionado 'relative' aqui */}
            {/* Título e descrição (centralizados) */}
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Principais Benefícios
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Por que os candidatos escolhem a Nexus para sua busca de emprego
              </p>
            </div>
            {/* Grid com os cards (agora em uma div separada) */}
            <div className="grid gap-8 md:grid-cols-3">
              {/* Card 1: Avaliação Única */}
              <Card className="bg-background/80 backdrop-blur-sm border-purple-200/50 dark:border-purple-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                    <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="dark:text-white">
                    Avaliação única
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Não há mais testes repetitivos para cada aplicação
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Conclua nossas avaliações abrangentes apenas uma vez e use
                    seus resultados validados em todas as candidaturas de
                    emprego na plataforma.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Correspondência com IA */}
              <Card className="bg-background/80 backdrop-blur-sm border-indigo-200/50 dark:border-indigo-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                    <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <CardTitle className="dark:text-white">
                    Correspondência com tecnologia de IA
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Encontre oportunidades que realmente se encaixam no seu
                    perfil
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Nosso algoritmo inteligente combina você com cargos que
                    correspondem às suas habilidades, experiência e preferências
                    de trabalho.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Foco em Você */}
              <Card className="bg-background/80 backdrop-blur-sm border-violet-200/50 dark:border-violet-800/50">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                    <Users className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                  </div>
                  <CardTitle className="dark:text-white">
                    Foco em Você
                  </CardTitle>
                  <CardDescription className="dark:text-stone-200">
                    Seja indicado para empresas que valorizam suas habilidades
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    Conecte-se com empregadores que buscam exatamente o que você
                    tem a oferecer e que valorizam suas habilidades e
                    experiência.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Histórias de Sucesso */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Histórias de Sucesso
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Ouça de candidatos que encontraram suas posições ideais através
                do Nexus
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1: Sarah J. */}
              <Card className="bg-background border-purple-200/50 dark:border-purple-800/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Sarah J."
                      />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Sarah J.
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Engenheira de Software
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "Após meses me candidatando a empregos que não eram
                    adequados, o Nexus me conectou com uma empresa que se
                    alinhava perfeitamente às minhas habilidades e valores. A
                    avaliação única me economizou inúmeras horas!"
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Marcus T. */}
              <Card className="bg-background border-indigo-200/50 dark:border-indigo-800/50">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Marcus T."
                      />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Marcus T.
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Gerente de Produto
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "A avaliação de adequação cultural foi um divisor de águas.
                    Fui conectado a uma empresa cujo estilo de trabalho e
                    valores se alinhavam perfeitamente aos meus. Nunca estive
                    tão feliz na minha carreira."
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Elena R. */}
              <Card className="bg-background border-violet-200/50 dark:border-violet-800/50 md:col-span-2 lg:col-span-1">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://github.com/shadcn.png"
                        alt="Elena R."
                      />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg dark:text-white">
                        Elena R.
                      </CardTitle>
                      <CardDescription className="dark:text-stone-200">
                        Designer de UX
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground dark:text-stone-200">
                    "Como alguém que valoriza o equilíbrio entre vida pessoal e
                    profissional, fiquei muito feliz que o Nexus levou minhas
                    preferências em consideração. Recebi correspondências de
                    qualidade em vez de quantidade e encontrei o emprego dos
                    meus sonhos em semanas."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seção: Pronto para Transformar Sua Experiência de Recrutamento? */}
        <section className="relative">
          {/* Fundo com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          {/* Overlay preto semitransparente apenas no dark mode */}
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative flex items-center justify-center min-h-[50vh]">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Pronto para Transformar Sua Experiência de Recrutamento?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Crie seu perfil hoje mesmo e descubra oportunidades que
                realmente correspondem às suas habilidades e preferências.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-black text-white hover:bg-purple-800 hover:text-white transition-all duration-300"
                >
                  <Link to="/register">Crie seu perfil</Link>
                </Button>
                <Button
                  className="bg-white hover:bg-gray-200 dark:hover:bg-zinc-400 dark:text-black hover:text-black transition-all duration-100"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/login">Já tem uma conta?</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
