import * as Dialog from "@radix-ui/react-dialog";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Check, GameController } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { Game } from "../App";
import Input from "./input";
import axios from "axios";

const AdModal = () => {
  const [listOfGames, setListOfGames] = useState<Game[]>([]);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  useEffect(() => {
    axios("http://localhost:3333/games").then((res) =>
      setListOfGames(res.data)
    );
  }, []);

  const list = listOfGames.map((game) => (
    <option title={game.title} key={game.id} value={game.id}>
      {game.title}
    </option>
  ));

  const days = [
    { value: "0", display: "D", name: "Domingo" },
    { value: "1", display: "S", name: "Segunda" },
    { value: "2", display: "T", name: "Terça" },
    { value: "3", display: "Q", name: "Quarta" },
    { value: "4", display: "Q", name: "Quinta" },
    { value: "5", display: "S", name: "Sexta" },
    { value: "6", display: "S", name: "Sábado" },
  ];

  const WeekOptions = days.map((day) => (
    <ToggleGroup.Item
      className={`w-8 h-8 rounded bg-zinc-900 data-state-on:bg-violet-500`}
      title={day.name}
      value={day.value}
      key={day.name}
    >
      {day.display}
    </ToggleGroup.Item>
  ));

  const postAd = async (
    form: any,
    weekDays: string[],
    useVoiceChannel: boolean
  ) => {
    try {
      await axios.post(`http://localhost:3333/games/${form.id}/ads`, {
        name: form.name,
        yearPlaying: Number(form.yearPlaying),
        discord: form.discord,
        weekDays: weekDays.map(Number),
        hourStart: form.hourStart,
        hourEnd: form.hourEnd,
        useVoiceChannel: useVoiceChannel,
      });
      console.info("sucess on creating ad");
    } catch (error) {
      console.error("ad wasn't created, error : \n" + error);
      return -1;
    }
  };

  const handleCreateAd = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    postAd(data, weekDays, useVoiceChannel);
    console.log(data);
    console.log(weekDays);
    console.log(useVoiceChannel);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-2xl">
        <Dialog.Title className="text-3xl font-black">
          Publique um anúncio.
        </Dialog.Title>
        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <select
              required
              defaultValue={""}
              name="id"
              id="game"
              className="bg-zinc-900 py-3 px-5 rounded text-small text-zinc-500"
            >
              <option disabled hidden value="">
                selecione o game que deseja jogar
              </option>
              {list}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              required
              name="name"
              id="name"
              type={"text"}
              placeholder="como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearPlaying">Joga a quantos anos?</label>
              <Input
                required
                name="yearPlaying"
                id="yearPlaying"
                type={"number"}
                placeholder="tudo bem ser zero"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual o seu discord</label>
              <Input
                required
                pattern="^.{3,32}#[0-9]{4}$"
                id="discord"
                name="discord"
                type={"text"}
                placeholder="usuario#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>
              <ToggleGroup.Root
                type="multiple"
                onValueChange={setWeekDays}
                className="grid grid-cols-4 gap-2"
              >
                {WeekOptions}
              </ToggleGroup.Root>
            </div>

            <div className="flex flex-col gap-2 flex-1 font-light">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  required
                  pattern="\d\d:\d\d"
                  id="hourStart"
                  name="hourStart"
                  type="time"
                  placeholder="De"
                  className="bg-zinc-900 py-3 px-2 rounded text-small placeholder:text-zinc-500"
                />
                <input
                  required
                  pattern="\d\d:\d\d"
                  id="hourEnd"
                  name="hourEnd"
                  type="time"
                  placeholder="Até"
                  className="bg-zinc-900 py-3 px-2 rounded text-small placeholder:text-zinc-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-2 flex items-center gap-2 text-small">
            <Checkbox.Root
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
              id="voiceChat"
              className="w-6 p-1 h-6 rounded bg-zinc-900 "
            >
              <Checkbox.Indicator>
                <Check className="w-4  h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
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
  );
};

export default AdModal;
