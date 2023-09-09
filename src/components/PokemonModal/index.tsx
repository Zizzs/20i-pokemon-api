import { Pokemon } from "../../types/pokemon";

type PokemonModalProps = {
  currentPokemon: Pokemon | null | undefined;
};

export const PokemonModal = ({ currentPokemon }: PokemonModalProps) => {
  let currentPokemonName = "";
  if (currentPokemon) {
    currentPokemonName =
      currentPokemon.name.charAt(0).toUpperCase() +
      currentPokemon.name.slice(1);
  }

  return (
    <div className="p-4">
      <div className="flex flex-col align-center h-full w-full">
        <div className="flex align-center">
          <p className="items-center flex">{currentPokemonName}</p>
          <p className="flex justify-end w-full items-center">
            ID: {currentPokemon?.id}
          </p>
        </div>
        <div className="px-16 gap-8 justify-center flex w-full">
          {currentPokemon?.types.map((type, index) => {
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
              currentPokemon?.sprites.front_default
                ? currentPokemon?.sprites.front_default
                : ""
            }
          />
          <img
            src={
              currentPokemon?.sprites.back_default
                ? currentPokemon?.sprites.back_default
                : ""
            }
          />
          <img
            src={
              currentPokemon?.sprites.front_shiny
                ? currentPokemon?.sprites.front_shiny
                : ""
            }
          />
          <img
            src={
              currentPokemon?.sprites.back_shiny
                ? currentPokemon?.sprites.back_shiny
                : ""
            }
          />
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          {currentPokemon?.stats.map((stat, index) => {
            return (
              <div
                key={`pokemon-stat-${index}`}
                className="justify-center flex flex-col items-center"
              >
                <p className="text-[20px]">{stat.stat.name.toUpperCase()}</p>
                <p>{stat.base_stat}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
