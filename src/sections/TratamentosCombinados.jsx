import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Activity, Dna, Droplets } from "lucide-react";
import { Particles } from "../components/magic-ui/particles";

function TratamentoCard({ icon: Icon, title, children }) {
  return (
    <CardSpotlight className="relative h-full w-full overflow-hidden rounded-2xl border border-line/40 bg-bg p-6 shadow-lg ring-1 ring-white/5">
        <div className="flex h-full flex-col">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg2/60 ring-1 ring-white/10">
                <Icon className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-title text-lg text-text">{title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted">{children}</p>
        </div>
    </CardSpotlight>
  )
}

export function TratamentosCombinados() {
  return (
    <section id="combinados" className="relative overflow-hidden bg-bg py-16 md:py-24">
      
      <Particles
        className="absolute inset-0"
        quantity={75}
        color="#C9D2DF"
      />

      <div className="relative mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <Badge>Protocolo Combinado</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Potencialize os Resultados Combinando Tratamentos
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-muted">
            Para um alívio completo e duradouro, associamos o poder de lubrificação do Ácido Hialurônico com o alívio imediato de outros procedimentos.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <FadeIn delay={0.1}>
            <TratamentoCard icon={Droplets} title="1. Ácido Hialurônico">
              Age como um lubrificante, restaurando a viscosidade e melhorando a mobilidade a médio e longo prazo. É a base do tratamento para a saúde da cartilagem.
            </TratamentoCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <TratamentoCard icon={Activity} title="2. Bloqueio de Nervos Geniculares">
              Oferece um alívio rápido e efetivo da dor, "desligando" os sinais de desconforto. Ideal para complementar o Ácido Hialurônico e trazer conforto imediato.
            </TratamentoCard>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
            <CardSpotlight className="mt-12 w-full rounded-2xl border border-line/40 bg-bg2/40 p-6 text-center">
                <div className="flex justify-center mb-4">
                    <Dna className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-title text-xl">Tratamentos Ortobiológicos</h3>
                <p className="mt-2 mx-auto max-w-2xl text-sm text-muted">
                    Atualmente, já temos disponíveis tratamentos regenerativos, como o BMA (células-tronco), que podem ser associados para potencializar ainda mais a recuperação da articulação.
                </p>
            </CardSpotlight>
        </FadeIn>
      </div>
    </section>
  );
}