import { GameController } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import Logo from "./assets/Logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { GameBanner } from "./components/GameBanner";
import { Input } from "./components/Input";
import { api } from "./services/api";

interface Games {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<Games[]>([]);

  useEffect(() => {
    loadGames();
  }, []);

  const loadGames = async () => {
    const response = await api.get("/games");
    setGames(response.data);
  };

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
          {games.map((game) => (
            <GameBanner
              key={game.id}
              img={game.bannerUrl}
              alt={game.title}
              title={game.title}
              quantityAds={game._count.ads}
            />
          ))}
        </div>
        <Dialog.Root>
          <CreateAdBanner />
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/60" />
            <Dialog.Content className="fixed bg-[#2a2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
              <Dialog.Title className="font-bold text-3xl">
                Publique um anúncio
              </Dialog.Title>
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">
                    Qual o game?
                  </label>
                  <Input
                    id="game"
                    placeholder="Selecione o game que deseja jogar"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input
                    id="name"
                    placeholder="Como te chamam dentro do game?"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                    <Input
                      type="number"
                      id="yearsPlaying"
                      placeholder="Tubo bem ser ZERO"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu discord?</label>
                    <Input id="discord" placeholder="Usuário#0000" />
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="weekDays">Quando costuma jogar?</label>
                    <div className="grid grid-cols-4 gap-2">
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Domingo"
                      >
                        D
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Segunda"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Terça"
                      >
                        T
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Quarta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Quinta"
                      >
                        Q
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Sexta"
                      >
                        S
                      </button>
                      <button
                        className="w-8 h-8 rounded bg-zinc-900 "
                        title="Sábado"
                      >
                        S
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="hourStart">Qual o horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hourStart" type="time" placeholder="De" />
                      <Input id="hourEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Costumo me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close
                    type="button"
                    className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                  >
                    Cancelar
                  </Dialog.Close>
                  <button
                    className="bg-violet-500 flex items-center gap-3 px-5 h-12 rounded-md font-semibold hover:bg-violet-600"
                    type="submit"
                  >
                    Encontrar <GameController size={24} /> duo
                  </button>
                </footer>
              </form>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </>
  );
}
