import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { BadgeCheck } from "lucide-react";
import { Particles } from "../components/magic-ui/particles";

function BeneficioCard({ icon: Icon, title, children }) {
  return (
    <CardSpotlight className="relative h-full w-full overflow-hidden rounded-2xl border border-line/40 bg-bg p-6 shadow-lg ring-1 ring-white/5">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-bg2/60 ring-1 ring-white/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h3 className="font-title text-lg text-text">{title}</h3>
          <p className="mt-1 text-sm text-muted">{children}</p>
        </div>
      </div>
    </CardSpotlight>
  );
}

export function BeneficiosAcido() {
  const listaBeneficios = [
    {
      title: "Alívio Rápido e Duradouro",
      description: "Combinamos o conforto imediato do bloqueio de nervos com a lubrificação de longo prazo do ácido hialurônico.",
    },
    {
      title: "Recuperação Acelerada",
      description: "Protocolos minimamente invasivos que permitem o retorno rápido às suas atividades diárias, sem longos períodos de afastamento.",
    },
    {
      title: "Tratamento Personalizado",
      description: "Avaliamos seu caso para definir a melhor combinação de técnicas, garantindo uma solução sob medida para a sua dor.",
    },
    {
      title: "Segurança em Primeiro Lugar",
      description: "Todos os procedimentos são realizados por especialista, utilizando técnicas comprovadas e tecnologia de ponta.",
    },
    {
      title: "Adie ou Evite a Cirurgia",
      description: "Nossa abordagem integrada pode retardar significativamente ou até mesmo evitar a necessidade de uma cirurgia de prótese no futuro.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">

      <Particles
        className="absolute inset-0 pointer-events-none"
        quantity={120}
        color="#10B981"
        size={1.2}
        opacity={0.5}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-bg/10 via-transparent to-bg/20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 z-10">
        <FadeIn className="text-center mb-12">
           <h2 className="font-title text-3xl md:text-4xl">
            Benefícios da Nossa Abordagem Integrada
          </h2>
           <p className="mt-4 max-w-3xl mx-auto text-muted">
            Não tratamos apenas o sintoma, cuidamos da saúde da sua articulação de forma completa, combinando o que há de mais moderno para o seu bem-estar.
          </p>
        </FadeIn>

        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {listaBeneficios.slice(0, 3).map((beneficio, index) => (
              <FadeIn key={beneficio.title} delay={index * 0.05}>
                <BeneficioCard icon={BadgeCheck} title={beneficio.title}>
                  {beneficio.description}
                </BeneficioCard>
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-4xl mx-auto">
            {listaBeneficios.slice(3, 5).map((beneficio, index) => (
              <FadeIn key={beneficio.title} delay={(index + 3) * 0.05}>
                <div className="w-full md:w-80 lg:w-96">
                  <BeneficioCard icon={BadgeCheck} title={beneficio.title}>
                    {beneficio.description}
                  </BeneficioCard>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}