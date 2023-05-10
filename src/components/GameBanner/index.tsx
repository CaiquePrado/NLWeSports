interface GameBannerProps {
  img: string;
  title: string;
  alt: string;
  quantityAds: number;
}

export const GameBanner = ({
  img,
  title,
  alt,
  quantityAds,
  ...props
}: GameBannerProps) => {
  return (
    <a
      {...props}
      href="#"
      className="relative overflow-hidden rounded-lg keen-slider__slide flex  items-centr justify-center"
    >
      <img src={img} alt={alt} />
      <div className="bg-gameGradient w-full p pt-16 pb-4 px-4 absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <p className="text-zinc-300 text-sm block mt-1">
          {quantityAds > 1 ? `${quantityAds} anúncios` : `Nenhum anúncio`}
        </p>
      </div>
    </a>
  );
};
