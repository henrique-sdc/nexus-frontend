import { Link } from "react-router-dom";
import { Button } from "src/components/ui/button";
import { FileCheck, Brain, Building2, ArrowRight } from "lucide-react";
import "../styles/App.css";
import NavBar from "src/components/NavBar/NavBar";
import Footer from "src/components/Footer/Footer";
import telemarketingImage from "../assets/images/telemarketin.png";
import companyImage from "../assets/images/empresa.png";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* NavBar */}
      <NavBar />

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
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 items-center">
              {/* Coluna da esquerda - Texto */}
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-500/30 px-3 py-1 text-sm dark:text-white">
                  Revolucionando o Recrutamento
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl dark:text-white">
                  Unificando o Recrutamento com{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 pr-0.5">
                    Conexões Potencializadas por IA
                  </span>
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-stone-200">
                  Um perfil. Uma avaliação. Oportunidades sem fim. Nexus conecta
                  candidatos qualificados com os empregadores ideais por meio de
                  correspondência inteligente.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="bg-black text-white hover:bg-purple-800 hover:text-white transition-all duration-300"
                    size="lg"
                    asChild
                  >
                    <Link to="/register">Comece Agora</Link>
                  </Button>
                  <Button
                    className="bg-white hover:bg-gray-100 hover:text-black transition-all duration-300"
                    size="lg"
                    variant="outline"
                    asChild
                  >
                    <Link to="/empresas">Para Empresas</Link>
                  </Button>
                </div>
              </div>

              {/* Coluna da direita - Imagem */}
              <div className="relative aspect-square md:aspect-auto">
                {/* Fundo de gradiente com blur */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl -z-10"></div>
                <div className="relative bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm">
                  <img
                    src={telemarketingImage}
                    width={800}
                    height={400}
                    alt="Nexus Platform"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Como o Nexus Funciona */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Como o Nexus Funciona
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed dark:text-stone-100">
                Nossa plataforma simplifica o processo de recrutamento tanto
                para candidatos quanto para empresas.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Caixa 1 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.4)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-2xl 
                  group-hover:bg-purple-500/30 dark:group-hover:bg-purple-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Avaliação Única
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Realize testes de lógica, adequação cultural e habilidades
                  apenas uma vez e utilize seu perfil em múltiplas candidaturas.
                </p>
              </div>

              {/* Caixa 2 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.4)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-2xl 
                  group-hover:bg-indigo-500/30 dark:group-hover:bg-indigo-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                  <Brain className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Correspondência Potencializada por IA
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Nosso algoritmo inteligente valida e otimiza os perfis para
                  combinar candidatos com as posições ideais.
                </p>
              </div>

              {/* Caixa 3 */}
              <div className="group relative overflow-hidden rounded-lg border bg-background dark:bg-black/90 p-6 hover:shadow-md dark:hover:shadow-[0_4px_10px_rgba(255,255,255,0.4)] transition-all">
                <div
                  className="absolute top-0 right-0 h-20 w-20 translate-x-6 -translate-y-6 
                  bg-violet-500/20 dark:bg-violet-500/30 rounded-full blur-2xl 
                  group-hover:bg-violet-500/30 dark:group-hover:bg-violet-500/40 transition-all"
                ></div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30">
                  <Building2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  Recrutamento Eficiente
                </h3>
                <p className="text-muted-foreground dark:text-stone-100">
                  Empresas acessam perfis pré-validados e encontram o candidato
                  ideal de forma rápida e eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Mostre Seu Verdadeiro Potencial (Para Candidatos) */}
        <section className="relative py-16 md:py-24">
          {/* Fundo com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          {/* Overlay preto semitransparente apenas no dark mode */}
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                {/* Rótulo */}
                <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-900/30 px-3 py-1 text-sm dark:text-white">
                  Para Candidatos
                </div>
                {/* Título */}
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Mostre Seu Verdadeiro Potencial
                </h2>
                {/* Parágrafo */}
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Crie um perfil completo que destaque suas habilidades,
                  experiência e preferências culturais. Realize nossos testes de
                  avaliação{" "}
                  <span className="underline underline-offset-2">
                    uma única vez
                  </span>{" "}
                  e candidate-se a diversas vagas com facilidade.
                </p>
                {/* Lista */}
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span className="dark:text-stone-200">
                      Um único perfil para múltiplas candidaturas
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span className="dark:text-stone-200">
                      Avaliação completa de habilidades
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    <span className="dark:text-stone-200">
                      Correspondência de emprego aprimorada por IA
                    </span>
                  </li>
                </ul>
                {/* Botão */}
                <Button asChild>
                  <div className="dark:text-white  hover:text-gray-200 dark:hover:text-zinc-400 transition-all duration-100">
                    <Link
                      to="/register"
                      className="inline-flex items-center gap-2"
                    >
                      Crie Seu Perfil <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Encontre Seus Candidatos Ideais Mais Rápido (Para Empresas) */}
        <section className="py-16 md:py-24 dark:bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              {/* Coluna da esquerda - Imagem */}
              <div className="relative order-last lg:order-first">
                <div className="relative aspect-square md:aspect-auto">
                  {/* Fundo de gradiente com blur */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-300/20 to-gray-300/20 dark:from-gray-300/20 dark:to-gray-300/20 rounded-full blur-3xl -z-10"></div>
                  {/* Container da imagem com efeito e borda */}
                  <div className="relative bg-gradient-to-br from-indigo-100 to-blue-100 dark:from-cyan-950 dark:to-blue-950 p-6 rounded-2xl border border-indigo-200/50 dark:border-blue-950/50 backdrop-blur-sm">
                    <img
                      src={companyImage}
                      width={800}
                      height={400}
                      alt="Empresa"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>

              {/* Coluna da direita - Conteúdo */}
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-indigo-100 dark:bg-indigo-900/30 px-3 py-1 text-sm dark:text-white">
                  Para Empresas
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl dark:text-white">
                  Encontre Seus Candidatos Ideais Mais Rápido
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                  Acesse um conjunto de candidatos pré-validados com habilidades
                  verificadas e compatibilidade cultural. Nossa plataforma
                  potencializada por IA ajuda você a identificar a combinação
                  perfeita para sua equipe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Recursos avançados de filtragem e pesquisa
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Habilidades verificadas e resultados de avaliações
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-indigo-600"></div>
                    <span className="dark:text-stone-200">
                      Processo de recrutamento simplificado
                    </span>
                  </li>
                </ul>
                <Button asChild>
                  <div className="dark:text-white hover:text-gray-200 dark:hover:text-zinc-400 transition-all duration-100">
                    <Link
                      to="/register?tab=empresa"
                      className="inline-flex items-center gap-2"
                    >
                      Cadastre-se como Empresa{" "}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Seção: Pronto para Transformar Sua Experiência de Recrutamento? */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950/60 -z-20"></div>
          <div className="hidden dark:block absolute inset-0 bg-black opacity-50 -z-10"></div>
          <div className="container mx-auto px-4 relative flex items-center justify-center min-h-[50vh]">
            <div className="mx-auto max-w-[800px] space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
                Pronto para Transformar Sua Experiência de Recrutamento?
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed dark:text-stone-200">
                Junte-se à Nexus hoje e descubra uma maneira mais inteligente de
                conectar talentos com oportunidades.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-black text-white hover:bg-purple-800 hover:text-white transition-all duration-300"
                >
                  <Link to="/register">Cadastre-se como Candidato</Link>
                </Button>
                <Button
                  className="bg-white hover:bg-gray-200 dark:hover:bg-zinc-400 dark:text-black hover:text-black transition-all duration-100"
                  size="lg"
                  variant="outline"
                  asChild
                >
                  <Link to="/register?tab=empresa">
                    Cadastre-se como Empresa
                  </Link>
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
