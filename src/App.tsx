import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import logoImg from "./assets/Logo.svg";
import GameBanner from "./components/GameBanner";
import AdBanner from "./components/AdBanner";
import "./styles/main.css";
import { GameController } from "phosphor-react";
import Input from "./components/input";

interface Game {
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
    fetch("http://localhost:3333/games")
      .then((res) => res.json())
      .then((data) => setGames(data));
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

      <Dialog.Root>
        <AdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-2xl">
            <Dialog.Title className="text-3xl font-black">
              Publique um anúncio.
            </Dialog.Title>
            <form className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual o game?
                </label>
                <Input
                  id="game"
                  type={"text"}
                  placeholder="selectione o game que deseja jogar"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Seu nome (ou nickname)</label>
                <Input
                  id="name"
                  type={"text"}
                  placeholder="como te chamam dentro do game?"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
                  <Input
                    id="yearsPlaying"
                    type={"number"}
                    placeholder="tudo bem ser zero"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="discord">Qual o seu discord</label>
                  <Input
                    id="discord"
                    type={"text"}
                    placeholder="usuario#0000"
                  />
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Domingo"
                      type="button"
                    >
                      D
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Segunda"
                      type="button"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Terça"
                      type="button"
                    >
                      T
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Quarta"
                      type="button"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Quinta"
                      type="button"
                    >
                      Q
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Sexta"
                      type="button"
                    >
                      S
                    </button>
                    <button
                      className="w-8 h-8 rouded bg-zinc-900"
                      title="Sabádo"
                      type="button"
                    >
                      S
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-small">
                <input type="checkbox" id="voiceChat" />
                <label htmlFor="voiceChat">
                  Costumo me conectar ao chat de voz
                </label>
              </div>
              <footer className="mt-4 flex justify-end gap-4">
                <Dialog.Close
                  type="button"
                  className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close>
                <button
                  type="submit"
                  className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
                >
                  <GameController size="24" /> Encontrar duo!
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </main>
  );
};

export default App;
