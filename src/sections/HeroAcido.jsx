import { Button } from "../components/ui/button";
import { FadeIn } from "../components/motion/fade-in";

const imagemDeFundo = `${import.meta.env.BASE_URL}images/tratamentos/acido-hialuronico-hero.jpg`;

export function HeroAcido() {
  return (
    <section className="relative overflow-hidden flex items-center min-h-[700px] lg:min-h-[100svh]">
      <img
        src={imagemDeFundo}
        alt="Tratamento de joelho com ácido hialurônico"
        className="absolute inset-0 h-full w-full object-cover z-10"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2B45]/90 via-[#0C1C2A]/95 to-[#07111A]/95 z-20" />
      <div className="relative z-30 mx-auto max-w-4xl px-4 text-center">
        <FadeIn className="w-full">
          <h1 className="font-title text-4xl leading-tight md:text-6xl">
            Volte a viver controlando a dor do joelho com aplicação de{' '}
            <span className="text-accent">ácido hialurônico.</span>
          </h1>

          <p className="mt-6 mx-auto max-w-2xl text-lg text-muted">
            Recupere a lubrificação, o conforto e a liberdade de se movimentar com o tratamento minimamente invasivo que já ajudou milhares de pessoas a adiarem ou evitarem a cirurgia.
          </p>

          <div className="mt-8">
            <Button asChild variant="gold" size="lg" className="font-bold">
              <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20vim%20da%20landing%20page%20sobre%20o%20tratamento%20com%20%C3%A1cido%20hialur%C3%B4nico%20e%20gostaria%20de%20saber%20mais."
              target="blank"
              >
                Quero agendar minha avaliação!
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}