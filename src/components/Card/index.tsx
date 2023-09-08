import { Pokemon } from "../../types/pokemon";

type CardProps = {
  pokemon: Pokemon;
};

export const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="flex w-[315px] h-[104px] bg-white">
      <div>
        <img
          src={
            pokemon.sprites.front_default ? pokemon.sprites.front_default : ""
          }
        />
      </div>
      <p>{pokemon.name.toUpperCase()}</p>
    </div>
  );
};
