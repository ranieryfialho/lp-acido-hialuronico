// src/sections/DepoimentosAcido.jsx

import { FadeIn } from "../components/motion/fade-in";
import { CardSpotlight } from "../components/magic-ui/card-spotlight";
import { Badge } from "../components/ui/badge";
import { Star, Quote } from "lucide-react";

// --- CONTEÚDO DE EXEMPLO ---
// Quando receber os depoimentos, basta editar este array.
const DEPOIMENTOS_EXEMPLO = [
  {
    id: "t1",
    nome: "Maria S.",
    texto: "Estava com muito receio, mas o alívio que senti depois da aplicação foi incrível. Voltei a caminhar no parque sem dor, algo que não fazia há anos. Recomendo demais!",
    rating: 5,
  },
  {
    id: "t2",
    nome: "João P.",
    texto: "O procedimento foi super rápido e indolor. Em poucos dias, já senti meu joelho menos rígido e com mais mobilidade. Agradeço ao Dr. Felipe pelo excelente atendimento.",
    rating: 5,
  },
  {
    id: "t3",
    nome: "Ana L.",
    texto: "Depois de tentar várias fisioterapias sem sucesso, a aplicação de ácido hialurônico foi a solução que eu precisava. Minha qualidade de vida melhorou 100%.",
    rating: 5,
  },
];

// Componente para as estrelas de avaliação
function RatingStars({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value ? "text-yellow-400 fill-yellow-400" : "text-yellow-400/40"
          }`}
        />
      ))}
    </div>
  );
}

// Componente para o card de depoimento (estrutura corrigida)
function DepoimentoCard({ item }) {
  const iniciais = item.nome.split(" ").map((n) => n[0]).slice(0, 2).join("");

  return (
    <CardSpotlight className="h-full w-full">
      <article className="relative flex h-full w-full flex-col rounded-2xl border border-line/40 bg-bg/60 p-5 shadow-lg ring-1 ring-white/5">
        <RatingStars value={item.rating} />
        <p className="mt-4 flex-1 text-sm leading-relaxed text-text">
          <Quote className="mr-1 inline-block h-4 w-4 translate-y-[-1px] text-muted" />
          {item.texto}
        </p>
        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-bg2/60 ring-1 ring-white/10">
            <span className="text-xs font-medium text-text">{iniciais}</span>
          </div>
          <div className="text-xs">
            <div className="font-medium text-text">{item.nome}</div>
            <div className="text-muted">Paciente verificado</div>
          </div>
        </div>
      </article>
    </CardSpotlight>
  );
}

export function DepoimentosAcido() {
  return (
    <section id="depoimentos" className="bg-bg2/50 py-16 md:py-24">
      <div className="relative mx-auto max-w-7xl px-4">
        <FadeIn className="text-center">
          <Badge>Experiências Reais</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Veja a experiência de pacientes que já fizeram este procedimento
          </h2>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DEPOIMENTOS_EXEMPLO.map((depoimento, index) => (
            <FadeIn key={depoimento.id} delay={index * 0.1}>
              <DepoimentoCard item={depoimento} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}