import { useEffect, useState } from "react";

import "./styles/main.css";
import logoImg from "./assets/Logo.svg";

import AdModal from "./components/AdModal";
import GameBanner from "./components/GameBanner";
import AdBanner from "./components/AdBanner";
import { Root } from "@radix-ui/react-dialog";
import axios from "axios";

export interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    Ad: number;
  };
}

const App = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((res) => setGames(res.data));
  }, []);

  const gameList = games.map((game) => {
    return (
      <GameBanner
        bannerUrl={game.bannerUrl}
        title={game.title}
        adsCount={game._count.Ad}
        key={game.id}
      />
    );
  });

  return (
    <main className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <header className="flex flex-col items-center">
        <img className="mb-20" src={logoImg} alt="" />
        <h1 className="text-6xl text-white font-black mb-20">
          Seu{" "}
          <span className="bg-nlw-gradient text-transparent bg-clip-text">
            duo
          </span>{" "}
          está aqui.
        </h1>
      </header>
      <section className="grid grid-cols-6 gap-6 mb-8">{gameList}</section>
      <Root>
        <AdBanner />
        <AdModal />
      </Root>
    </main>
  );
};

export default App;
