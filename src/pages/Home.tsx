import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { FileCheck, Brain, Building2, ArrowRight } from "lucide-react";
import "../styles/App.css";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <section className="relative overflow-hidden py-24 md:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/30 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                  Revolucionando o Recrutamento
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Unificando o Recrutamento com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 pr-0.5">
                    Conexões Potencializadas por IA
                  </span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Um perfil. Uma avaliação. Oportunidades sem fim. Nexus conecta
                  candidatos qualificados com os empregadores ideais por meio de
                  correspondência inteligente.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link to="/register">Comece Agora</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/empresas">Para Empresas</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Como o Nexus Funciona
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                Nossa plataforma simplifica o processo de recrutamento tanto
                para candidatos quanto para empresas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-purple-500/20 rounded-full blur-2xl group-hover:bg-purple-500/30 transition-all"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Avaliação Única</h3>
                <p className="text-muted-foreground">
                  Realize testes de lógica, adequação cultural e habilidades
                  apenas uma vez e utilize seu perfil em múltiplas candidaturas.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-all"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Correspondência Potencializada por IA
                </h3>
                <p className="text-muted-foreground">
                  Nosso algoritmo inteligente valida e otimiza os perfis para
                  combinar candidatos com as posições ideais.
                </p>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:shadow-md transition-all">
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 bg-violet-500/20 rounded-full blur-2xl group-hover:bg-violet-500/30 transition-all"></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold">
                  Recrutamento Eficiente
                </h3>
                <p className="text-muted-foreground">
                  Empresas acessam perfis pré-validados e encontram o candidato
                  ideal de forma rápida e eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/30">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm">
                  Para Candidatos
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Mostre Seu Verdadeiro Potencial
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Crie um perfil completo que destaque suas habilidades,
                  experiência e preferências culturais. Realize nossos testes de
                  avaliação uma única vez e candidate-se a diversas vagas com
                  facilidade.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Um único perfil para múltiplas candidaturas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Avaliação completa de habilidades</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span>Correspondência de emprego aprimorada por IA</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link
                    to="/register"
                    className="inline-flex items-center gap-2"
                  >
                    Crie Seu Perfil <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="relative order-last lg:order-first"></div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-sm">
                  Para Empresas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Encontre Seus Candidatos Ideais Mais Rápido
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Acesse um conjunto de candidatos pré-validados com habilidades
                  verificadas e compatibilidade cultural. Nossa plataforma
                  potencializada por IA ajuda você a identificar a combinação
                  perfeita para sua equipe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span>Recursos avançados de filtragem e pesquisa</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span>
                      Habilidades verificadas e resultados de avaliações
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span>Processo de recrutamento simplificado</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link
                    to="/empresas/register"
                    className="inline-flex items-center gap-2"
                  >
                    Cadastre-se como Empresa <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/30">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Pronto para Transformar Sua Experiência de Recrutamento?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed">
                Junte-se à Nexus hoje e descubra uma maneira mais inteligente de
                conectar talentos com oportunidades.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button size="lg" asChild>
                  <Link to="/register">Cadastre-se como Candidato</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/empresas/register">Cadastre-se como Empresa</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
