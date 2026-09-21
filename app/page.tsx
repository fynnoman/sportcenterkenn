import Nav from "./components/Nav";
import Hero from "./components/Hero";
import WieBucheIch from "./components/WieBucheIch";
import Angebot from "./components/Angebot";
import Welcome from "./components/Welcome";
import Soccer from "./components/Soccer";
import Tennis from "./components/Tennis";
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
        <WieBucheIch />
        <Angebot />
        <Welcome />
        <Soccer />
        <Tennis />
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
