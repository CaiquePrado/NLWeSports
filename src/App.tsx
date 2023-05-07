import Legue from "./assets/LegueOfLegends.svg";
import Logo from "./assets/Logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
export function App() {
  return (
    <>
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
        <img src={Logo} alt="logo" className="object-cover" />
        <h1 className="text-6xl text-white mt-20 font-bold">
          Seu
          <span className="bg-nlwGradient bg-clip-text text-transparent">
            duo
          </span>
          está aqui.
        </h1>
        <div className="grid grid-cols-6 gap-6 mt-16">
          <GameBanner
            img={Legue}
            alt="Legue of Legends"
            title="Legue of Legends"
            quantityAds={4}
          />
        </div>
        <CreateAdBanner />
      </div>
    </>
  );
}
