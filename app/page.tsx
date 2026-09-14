import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Angebot from "./components/Angebot";
import Welcome from "./components/Welcome";
import Soccer from "./components/Soccer";
import Tennis from "./components/Tennis";
import Sommerkarte from "./components/Sommerkarte";
import BattleKart from "./components/BattleKart";
import NachDemSpiel from "./components/NachDemSpiel";
import Geburtstag from "./components/Geburtstag";
import Momente from "./components/Momente";
import SoLaeuftEs from "./components/SoLaeuftEs";
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
        <Welcome />
        <Soccer />
        <Tennis />
        <Sommerkarte />
        <BattleKart />
        <NachDemSpiel />
        <Geburtstag />
        <Momente />
        <SoLaeuftEs />
        <FAQ />
        <Kontakt />
      </main>
      <Footer />
    </>
  );
}
