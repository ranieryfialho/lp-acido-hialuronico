import React from "react";
import { FadeIn } from "../components/motion/fade-in";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Particles } from "../components/magic-ui/particles";

const FAQ_ITEMS = [
  {
    id: "dor",
    q: "Vai doer?",
    a: "O desconforto é mínimo, pois usamos anestesia local e agulhas finas.",
  },
  {
    id: "duracao",
    q: "Quanto tempo dura o efeito?",
    a: "Em média, de 6 meses a 1 ano, dependendo do caso.",
  },
  {
    id: "atividades",
    q: "Preciso parar minhas atividades?",
    a: "A maioria dos pacientes retoma suas atividades leves no mesmo dia.",
  },
  {
    id: "comorbidades",
    q: "Tenho comorbidades como hipertensão, diabetes, alergias, etc. Posso aplicar mesmo assim?",
    a: "Claro, pois o efeito é somente local e não interfere nessas outras doenças. Inclusive idosos de qualquer idade podem utilizar.",
  },
];

export function FaqAcido() {
  return (
    <section id="faq" className="relative overflow-hidden bg-bg py-16 md:py-24">

      <Particles
        className="absolute inset-0"
        quantity={75}
        color="#C9D2DF"
      />

      <div className="relative mx-auto max-w-4xl px-4">
        <FadeIn className="text-center mb-12">
          <Badge>Dúvidas Comuns</Badge>
          <h2 className="mt-3 font-title text-3xl md:text-4xl">
            Perguntas Frequentes
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}