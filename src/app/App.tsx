import {
  ArrowRight,
  Github,
  Wallet,
  ListChecks,
  Tags,
  ArrowLeftRight,
  PieChart,
  FileDown,
  ShieldCheck,
  LineChart,
  Star,
} from "lucide-react";
import { Mail, Instagram } from "lucide-react";
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Logo, WolfMark } from "./components/logo";
import { HeroArt } from "./components/hero-art";

/** Single place to point the site at your repository. */
const REPO_URL = "https://github.com/your-org/criso";

const NAV = [
  { label: "Visão geral", href: "#visao" },
  { label: "Recursos", href: "#recursos" },
  { label: "Histórias", href: "#historias" },
  { label: "Projeto", href: "#projeto" },
];

const FEATURES = [
  {
    icon: Wallet,
    title: "Múltiplos caixas",
    body: "Conta corrente, poupança, carteira física, cartão, cheque ou bitcoin — cada caixa com saldo próprio e um saldo consolidado.",
  },
  {
    icon: ListChecks,
    title: "Receitas & despesas",
    body: "Registre cada movimentação com valor, data, descrição, caixa e categoria. Seu fluxo de caixa, completo e preciso.",
  },
  {
    icon: Tags,
    title: "Categorias e subcategorias",
    body: "Crie hierarquias como Moradia → Aluguel e entenda exatamente para onde o seu dinheiro está indo.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transferências entre caixas",
    body: "Mova dinheiro entre suas carteiras com registro de saída e entrada, sem inflar receitas ou despesas.",
  },
  {
    icon: PieChart,
    title: "Relatórios visuais",
    body: "Gráficos de pizza, barras e a evolução do saldo ao longo do tempo para enxergar a sua saúde financeira.",
  },
  {
    icon: FileDown,
    title: "Exportação em CSV",
    body: "Exporte transações de um período para backup ou análise externa, com filtros por caixa e categoria.",
  },
];

const STORIES = [
  {
    n: "01",
    title: "Monitorar a carteira",
    role: "Como usuário,",
    want: "quero visualizar meus dados financeiros reunidos e sintetizados, com acesso aos caixas e transações,",
    so: "para monitorar e registrar minha saúde financeira.",
  },
  {
    n: "02",
    title: "Cadastrar transações",
    role: "Como usuário,",
    want: "quero registrar detalhadamente meus gastos e ganhos — valor, data, descrição e categoria,",
    so: "para ter um histórico completo e preciso do meu fluxo de caixa.",
  },
  {
    n: "03",
    title: "Categorizar movimentações",
    role: "Como usuário,",
    want: "quero criar e gerenciar categorias e subcategorias personalizadas,",
    so: "para organizar minhas transações e entender meus hábitos de consumo.",
  },
  {
    n: "04",
    title: "Exportar dados",
    role: "Como usuário,",
    want: "quero exportar minhas transações de um período em formatos como CSV,",
    so: "para fazer backups ou analisá-los em outras ferramentas.",
  },
];

const AUTHORS = [
  {
    name: "Kesley Soares da Silva",
    github: "https://github.com/",
    email: "mailto:kesley@example.com",
    instagram: "https://instagram.com/",
  },
  {
    name: "Matheus Fagundes Soares",
    github: "https://github.com/",
    email: "mailto:matheus@example.com",
    instagram: "https://instagram.com/",
  },
  {
    name: "Luis Vittor Ferreira Nunes",
    github: "https://github.com/",
    email: "mailto:luis@example.com",
    instagram: "https://instagram.com/",
  },
  {
    name: "Gabriel Rodrigues",
    github: "https://github.com/",
    email: "mailto:gabriel@example.com",
    instagram: "https://instagram.com/",
  },
];

const STATS = [
  { k: "21", v: "Requisitos funcionais" },
  { k: "8", v: "Casos de uso" },
  { k: "4", v: "Histórias de usuário" },
];

function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary">
      <span>{index}</span>
      <span className="h-px w-8 bg-primary/40" />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

function Site() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <a href="#top" className="shrink-0">
            <Logo />
          </a>
          <nav className="hidden items-center gap-7 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[0.9rem] text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[0.85rem] text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Github className="size-4" />
              <span className="hidden sm:inline">
                Repositório
              </span>
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section
          id="visao"
          className="relative overflow-hidden"
        >
          {/* ambient cerrado glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-40 right-[-6rem] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl" />
          </div>

          <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:pt-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  <Star className="size-3.5 text-primary" />
                  Finanças pessoais · Cerrado
                </span>
                <h1
                  className="mt-6 text-[clamp(2.6rem,6vw,4.4rem)] leading-[1.04] tracking-[-0.02em]"
                  style={{ fontWeight: 600 }}
                >
                  Suas finanças com a
                  <span className="text-primary">
                    {" "}
                    elegância do lobo guará.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground">
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Criso
                  </span>{" "}
                  reúne contas, despesas e fontes de renda em um
                  só lugar. Registre saldos, acompanhe o fluxo
                  de caixa e descubra a origem de cada real —
                  com clareza e controle.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Github className="size-[1.1rem]" />
                    Ver no repositório
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#recursos"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-foreground transition-colors hover:border-primary/50"
                  >
                    Conhecer recursos
                  </a>
                </div>

                <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
                  {STATS.map((s) => (
                    <div key={s.v}>
                      <dt className="font-mono text-[1.6rem] text-foreground">
                        {s.k}
                      </dt>
                      <dd className="mt-1 text-[0.78rem] leading-snug text-muted-foreground">
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="relative">
                <HeroArt />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="recursos"
          className="border-t border-border bg-card/40"
        >
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionLabel index="I">Recursos</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight tracking-[-0.01em]">
              Ferramentas para controlar e visualizar o seu
              dinheiro
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="group bg-card p-7 transition-colors hover:bg-secondary/40"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <f.icon className="size-[1.3rem]" />
                  </span>
                  <h3 className="mt-5 text-[1.15rem]">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-muted-foreground">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* User stories */}
        <section id="historias">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionLabel index="II">
              Histórias de usuário
            </SectionLabel>
            <h2 className="mt-4 max-w-2xl text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight tracking-[-0.01em]">
              O que as pessoas precisam resolver
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {STORIES.map((s) => (
                <article
                  key={s.n}
                  className="flex gap-5 bg-card p-7"
                >
                  <span
                    className="font-mono text-[1.5rem] leading-none text-primary/70"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[1.2rem]">{s.title}</h3>
                    <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                      <span className="text-foreground">
                        {s.role}
                      </span>{" "}
                      {s.want}{" "}
                      <span className="text-accent">
                        {s.so}
                      </span>
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust band */}
        <section className="border-y border-border bg-secondary/30">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                t: "Seguro por desenho",
                d: "Cadastro e autenticação de usuários para manter cada carteira privada.",
              },
              {
                icon: LineChart,
                t: "Evolução do saldo",
                d: "Acompanhe a trajetória do seu patrimônio ao longo do tempo.",
              },
              {
                icon: ArrowLeftRight,
                t: "Conciliação simples",
                d: "Edite, exclua e transfira mantendo os saldos sempre coerentes.",
              },
            ].map((i) => (
              <div key={i.t} className="flex gap-4">
                <i.icon className="size-6 shrink-0 text-primary" />
                <div>
                  <h3 className="text-[1.05rem]">{i.t}</h3>
                  <p className="mt-1 text-[0.88rem] leading-relaxed text-muted-foreground">
                    {i.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project / repo CTA */}
        <section id="projeto">
          <div className="mx-auto max-w-6xl px-5 py-20">
            <SectionLabel index="III">O projeto</SectionLabel>
            <div className="mt-8 grid gap-10 rounded-2xl border border-border bg-card p-8 sm:p-12 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <h2 className="text-[clamp(1.8rem,3.6vw,2.6rem)] leading-tight tracking-[-0.01em]">
                  Um sistema financeiro pessoal, do escopo ao
                  código
                </h2>
                <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground">
                  Criso nasceu de uma necessidade real: a
                  dificuldade de controlar dados financeiros
                  descentralizados entre diferentes contas,
                  despesas e fontes de renda. Inspirado em
                  ferramentas como Actual Budget, Mobills e
                  YNAB, o projeto entrega visualização clara de
                  orçamentos, metas e fluxos.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Github className="size-[1.1rem]" />
                    Acessar o repositório
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-background/50 p-6">
                <p className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-muted-foreground">
                  Líderes do projeto
                </p>
                <ul className="mt-5 space-y-5">
                  {AUTHORS.map((a) => (
                    <li
                      key={a.name}
                      className="flex items-center justify-between gap-3 border-b border-border pb-5 last:border-0 last:pb-0"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary/10 font-mono text-[0.8rem] text-primary">
                          {a.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </span>
                        <span className="truncate text-[0.92rem]">
                          {a.name}
                        </span>
                      </div>
                      <div className="flex shrink-0 items-center gap-1">
                        {[
                          {
                            href: a.github,
                            icon: Github,
                            label: "GitHub",
                          },
                          {
                            href: a.email,
                            icon: Mail,
                            label: "E-mail",
                          },
                          {
                            href: a.instagram,
                            icon: Instagram,
                            label: "Instagram",
                          },
                        ].map((s) => (
                          <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`${s.label} de ${a.name}`}
                            title={s.label}
                            className="grid size-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            <s.icon className="size-[1.05rem]" />
                          </a>
                        ))}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/40">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <WolfMark className="size-7 text-primary" />
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                }}
              >
                Criso
              </p>
              <p className="text-[0.78rem] text-muted-foreground">
                Inspirado no lobo guará, o guardião do Cerrado.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[0.88rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-4" /> GitHub
            </a>
            <p className="font-mono text-[0.75rem] text-muted-foreground">
              © {new Date().getFullYear()} Criso
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  );
}