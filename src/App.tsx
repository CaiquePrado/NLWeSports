import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import Apex from "./assets/ApexLegends.svg";
import Cs from "./assets/CounterStrike.svg";
import DotaDois from "./assets/DotaDois.svg";
import Fortnite from "./assets/Fortnite.svg";
import Legue from "./assets/LegueOfLegends.svg";
import Wow from "./assets/WorldOfWarcraft.svg";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <div className="max-w-[1344px] mx-auto flex flex-col justify-center items-center">
        <div className="grid grid-cols-6 gap-6">
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={Legue} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Legue of Legends
              </strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={Apex} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Apex Legends
              </strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={Cs} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                Counter Strike
              </strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={Wow} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">
                World of Warcraft
              </strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={DotaDois} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Dota 2</strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
          <a href="#" className="relative overflow-hidden rounded-lg">
            <img src={Fortnite} alt="Legue of legends" />
            <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">Fortnite</strong>
              <p className="text-zinc-300 text-sm block mt-1">4 anúncios</p>
            </div>
          </a>
        </div>
        <div className="pt-1 bg-nlwGradient self-stretch mt-8 rounded-lg overflow-hidden">
          <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
            <div>
              <strong className="text-2xl text-white font-bold block">
                Não encontrou seu duo?
              </strong>
              <span className="text-zinc-400 block">
                Publique um anúncio para encontrar novos players!
              </span>
            </div>
            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24} /> Publicar anúncio
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
