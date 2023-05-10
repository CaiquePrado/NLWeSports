import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "./assets/Logo.svg";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import { GameBanner } from "./components/GameBanner";
import { api } from "./services/api";

export interface Games {
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
      <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20 ">
        <img src={Logo} alt="logo" className="object-cover" />
        <h1 className="text-4xl text-white mt-20 font-bold md:text-6xl ">
          Seu
          <span className="bg-nlwGradient bg-clip-text text-transparent">
            duo
          </span>
          está aqui.
        </h1>

        <Swiper
          className="grid grid-cols-6 mt-16"
          spaceBetween={24}
          slidesPerView={"auto"}
          loop={true}
          centeredSlides={true}
        >
          {games.map((game) => (
            <SwiperSlide key={game.id}>
              <GameBanner
                img={game.bannerUrl}
                alt={game.title}
                title={game.title}
                quantityAds={game._count.ads}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Dialog.Root>
          <CreateAdBanner />
          <CreateAdModal />
        </Dialog.Root>
      </div>
      <ToastContainer autoClose={2000} />
    </>
  );
}
