import { FadeIn } from "../components/motion/fade-in";
import { Button } from "../components/ui/button";
import { CheckCircle2 } from "lucide-react";

const imagemProcedimento = `${import.meta.env.BASE_URL}images/tratamentos/acido-hialuronico-procedimento.jpeg`;

function BeneficioItem({ children }) {
    return (
        <li className="flex items-start gap-3">
            <span className="mt-1">
                <CheckCircle2 className="h-5 w-5 text-accent" />
            </span>
            <span className="text-text">{children}</span>
        </li>
    );
}

export function Viscossuplementacao() {
    const listaBeneficios = [
        "Lubrificar o joelho.",
        "Reduzir a dor.",
        "Melhorar a absorção de impacto.",
        "Restaurar a mobilidade.",
    ];

    return (
        <section className="bg-bg2/50 py-16 md:py-24">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 md:grid-cols-2">
                <FadeIn>
                    <div className="mx-auto max-w-sm md:max-w-md">
                        <div className="relative aspect-square overflow-hidden rounded-2xl border border-line/40 bg-bg/60 shadow-lg ring-1 ring-white/5">
                            <img
                                src={imagemProcedimento}
                                alt="Tratamento com Ácido Hialurônico"
                                className="absolute h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <h2 className="font-title text-3xl md:text-4xl">
                        O que é a aplicação de ácido hialurônico no joelho?
                    </h2>
                    <p className="mt-4 text-muted md:text-lg">
                        Também conhecida como viscossuplementação, é um procedimento minimamente invasivo que injeta uma substância semelhante ao líquido sinovial natural da articulação, ajudando a:
                    </p>
                    <ul className="mt-6 space-y-3">
                        {listaBeneficios.map((beneficio) => (
                            <BeneficioItem key={beneficio}>{beneficio}</BeneficioItem>
                        ))}
                    </ul>
                    <p className="mt-6 rounded-lg border border-line/40 bg-bg/50 p-4 text-sm text-muted">
                        Tudo isso feito no consultório, em poucos minutos, sem necessidade de internação.
                    </p>
                    <div className="mt-8 text-center">
                        <Button asChild variant="gold" className="font-bold">
                            <a href="https://wa.me/+555585994326619?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20aplica%C3%A7%C3%A3o%20de%20%C3%A1cido%20hialur%C3%B4nico."
                                target="_blank">
                                Agendar minha avaliação!
                            </a>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}