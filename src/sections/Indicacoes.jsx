import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";

function IndicacaoCard({ badge, title, treatment, children }) {
  return (
    <CardSpotlight className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-line/40 bg-bg p-6 shadow-lg ring-1 ring-white/5">
        <Badge variant="outline" className="mb-4 w-fit bg-bg2/80">{badge}</Badge>
        <h3 className="font-title text-lg text-text">{title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted">{children}</p>
        <div className="mt-4 border-t border-line/40 pt-3">
            <p className="text-xs text-muted">Tratamento Principal:</p>
            <p className="text-sm font-medium text-accent">{treatment}</p>
        </div>
    </CardSpotlight>
  )
}

export function Indicacoes() {
  return (
    <section id="indicacoes" className="bg-bg2/50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <h2 className="font-title text-3xl md:text-4xl">
            Qual a melhor abordagem para o seu caso?
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-muted">
            Cada paciente é único. Entenda como personalizamos o tratamento para alcançar os melhores resultados para a sua necessidade.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FadeIn delay={0.1}>
            <IndicacaoCard 
                badge="O Mais Indicado" 
                title="Para quem sofre com desgaste e busca recuperação"
                treatment="Ácido Hialurônico"
            >
              Ideal para pacientes com artrose, condromalácia ou desgaste da cartilagem que precisam de lubrificação e um alívio duradouro para voltar às atividades.
            </IndicacaoCard>
          </FadeIn>
          <FadeIn delay={0.2}>
            <IndicacaoCard 
                badge="Alívio Imediato" 
                title="Para quem tem dor intensa e precisa de conforto rápido"
                treatment="Bloqueio de Nervos Geniculares"
            >
             Trata-se de uma opção especialmente indicada para pacientes que necessitam de alívio imediato da dor, possibilitando o início precoce da reabilitação. Quando associado ao ácido hialurônico, constitui uma abordagem terapêutica complementar altamente eficaz.
            </IndicacaoCard>
          </FadeIn>
          <FadeIn delay={0.3}>
             <IndicacaoCard 
                badge="O Futuro da Regeneração" 
                title="Para quem busca a vanguarda da recuperação"
                treatment="Ortobiológicos (BMA / PRP)"
            >
              Uma futura opção para atletas ou pacientes que desejam potencializar a regeneração dos tecidos, combinando com os outros tratamentos.
            </IndicacaoCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}