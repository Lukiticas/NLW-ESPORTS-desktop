import "./styles/main.css";
import logoImg from "./assets/Logo.svg";
import { MagnifyingGlassPlus } from "phosphor-react";

function App() {
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
      <section className="grid grid-cols-6 gap-6 mb-8">
        <a title="game" href="#" className="relative">
          <img src="/game-1.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              League of Legends
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a title="game" href="#" className="relative">
          <img src="/game-2.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Smite</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a title="game" href="#" className="relative">
          <img src="/game-3.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              Counter Strike
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a title="game" href="#" className="relative">
          <img src="/game-4.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a title="game" href="#" className="relative">
          <img src="/game-5.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
        <a title="game" href="#" className="relative">
          <img src="/game-6.png" alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="font-bold text-white block">
              World of Warcraft
            </strong>
            <span className="text-zinc-300 text-sm block">4 anuncios</span>
          </div>
        </a>
      </section>
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg">
        <div className="bg-[#2A2634] px-8 py-6 rounded-md flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block mb-1">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size="24" />
            Publicar anúncio
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
