import { Pokemon, PokemonCard } from "../../types/pokemon";
import { useEffect, useState } from "react";

type PokemonModalProps = {
  currentPokemon: PokemonCard | null | undefined;
};

export const PokemonModal = ({ currentPokemon }: PokemonModalProps) => {
  const [shownPokemon, setShownPokemon] = useState<Pokemon | null>();

  useEffect(() => {
    if (currentPokemon) {
      fetchData(currentPokemon);
    }
  }, [currentPokemon]);

  const fetchData = async (pokemon: PokemonCard) => {
    try {
      // Fetch the initial API response that will hold the pokemon API routes
      const res = await fetch(pokemon.url);
      const json = await res.json();

      // Set to state
      setShownPokemon(json);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  let currentPokemonName = "";

  if (shownPokemon) {
    currentPokemonName =
      shownPokemon.name.charAt(0).toUpperCase() + shownPokemon.name.slice(1);
  }

  return (
    <div className="p-4">
      <div className="flex flex-col align-center h-full w-full font-roboto">
        <div className="flex align-center">
          <p className="items-center flex">{currentPokemonName}</p>
          <p className="flex justify-end w-full items-center">
            ID: {shownPokemon?.id}
          </p>
        </div>
        <div className="px-16 gap-8 justify-center flex w-full">
          {shownPokemon?.types.map((type, index) => {
            return (
              <p key={`pokemon-type-${index}`}>
                {type.type.name.charAt(0).toUpperCase() +
                  type.type.name.slice(1)}
              </p>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <img
            src={
              shownPokemon?.sprites.front_default
                ? shownPokemon?.sprites.front_default
                : ""
            }
          />
          <img
            src={
              shownPokemon?.sprites.back_default
                ? shownPokemon?.sprites.back_default
                : ""
            }
          />
          <img
            src={
              shownPokemon?.sprites.front_shiny
                ? shownPokemon?.sprites.front_shiny
                : ""
            }
          />
          <img
            src={
              shownPokemon?.sprites.back_shiny
                ? shownPokemon?.sprites.back_shiny
                : ""
            }
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {shownPokemon?.stats.map((stat, index) => {
            return (
              <div
                key={`pokemon-stat-${index}`}
                className="justify-center flex flex-col items-center"
              >
                <p className="text-[20px]">{stat.stat.name.toUpperCase()}</p>
                <p className="text-[18px]">{stat.base_stat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
