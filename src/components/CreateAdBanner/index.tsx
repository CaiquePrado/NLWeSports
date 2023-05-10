import { MagnifyingGlassPlus } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";

export const CreateAdBanner = () => {
  return (
    <div className="pt-1 bg-nlwGradient self-stretch mt-8 rounded-lg overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div>
          <strong className="text-lg md:text-2xl text-white font-bold block ">
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400 block md:text-base mt-1 md:mt-0 text-sm">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger asChild>
          <button className="md:py-3 md:px-4 py-2 px-2 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-1  md:gap-3 md:text-base text-sm  ">
            <MagnifyingGlassPlus size={24} /> Publicar
          </button>
        </Dialog.Trigger>
      </div>
    </div>
  );
};
