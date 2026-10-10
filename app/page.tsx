import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Angebot from "./components/Angebot";
import WieBucheIch from "./components/WieBucheIch";
import Welcome from "./components/Welcome";
import Soccer from "./components/Soccer";
import Tennis from "./components/Tennis";
import Padel from "./components/Padel";
import TennisTurniere from "./components/TennisTurniere";
import Sommerkarte from "./components/Sommerkarte";
import BattleKart from "./components/BattleKart";
import Geburtstag from "./components/Geburtstag";
import Extras from "./components/Extras";
import FAQ from "./components/FAQ";
import Kontakt from "./components/Kontakt";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Angebot />
        <WieBucheIch />
        <Welcome />
        <Soccer />
        <Tennis />
        <Padel />
        <TennisTurniere />
        <Sommerkarte />
        <BattleKart />
        <Geburtstag />
        <Extras />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
