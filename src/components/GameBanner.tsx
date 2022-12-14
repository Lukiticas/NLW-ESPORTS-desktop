interface GameBannerProps {
  bannerUrl: string;
  title: string;
  adsCount: number;
}

const GameBanner = ({ bannerUrl, title, adsCount }: GameBannerProps) => {
  return (
    <a title="game" href="#" className="relative rounded-md overflow-hidden">
      <img src={bannerUrl} alt="" className="w-full h-full" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">
          {adsCount} anúncio(s)
        </span>
      </div>
    </a>
  );
};

export default GameBanner;
