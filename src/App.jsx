import { Header } from "./components/nav/header";
import { BeneficiosAcido } from "./sections/BeneficiosAcido";
import { CtaFinal } from "./sections/CtaFinal";
import { DepoimentosAcido } from "./sections/DepoimentosAcido";
import { Especialista } from "./sections/Especialista";
import { FaqAcido } from "./sections/FaqAcido";
import { HeroAcido } from "./sections/HeroAcido";
import { Indicacoes } from "./sections/Indicacoes";
import { Localizacao } from "./sections/Localizacao";
import { Sintomas } from "./sections/Sintomas";
import { TratamentosCombinados } from "./sections/TratamentosCombinados";
import { Viscossuplementacao } from "./sections/Viscossuplementacao";


export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroAcido />
        <Sintomas />
        <TratamentosCombinados />
        <Viscossuplementacao />
        <Indicacoes />
        <BeneficiosAcido />
        <Especialista />
        <DepoimentosAcido />
        <CtaFinal />
        <Localizacao />
        <FaqAcido />
      </main>
    </>
  );
}