import { Pokemon } from "../../types/pokemon";

type CardProps = {
  pokemon: Pokemon;
};

export const Card = ({ pokemon }: CardProps) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <div className="flex w-[315px] h-[104px] bg-white rounded-lg p-4">
      <div className="bg-neutral-30 rounded-full w-[72px] h-[72px]">
        <img
          src={
            pokemon.sprites.front_default ? pokemon.sprites.front_default : ""
          }
        />
      </div>
      <p className="h-full pl-3 flex items-center font-encode-sans">{name}</p>
    </div>
  );
};
