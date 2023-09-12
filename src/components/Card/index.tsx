import { useEffect, useState } from "react";
import { PokemonCard } from "../../types/pokemon";
import classNames from "classnames";

type CardProps = {
  pokemon: PokemonCard;
  handleClick: (pokemon: PokemonCard) => void;
};

export const Card = ({ pokemon, handleClick }: CardProps) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div
      className={classNames(
        "flex w-[315px] h-[104px] bg-white rounded-lg p-4 cursor-pointer hover:outline-neutral-50 hover:outline hover:outline-2"
      )}
      onClick={() => handleClick(pokemon)}
    >
      <div className="bg-neutral-30 rounded-full w-[72px] h-[72px]">
        <img
          src={pokemon.image ? pokemon.image : "https://placehold.co/72x72"}
        />
      </div>
      <p className="h-full pl-3 flex items-center font-encode-sans">{name}</p>
    </div>
  );
};
