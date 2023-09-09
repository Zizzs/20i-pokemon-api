import { useEffect, useState } from "react";
import { Pokemon } from "../../types/pokemon";
import classNames from "classnames";

type CardProps = {
  pokemon: Pokemon;
  handleClick: (pokemon: Pokemon) => void;
};

export const Card = ({ pokemon, handleClick }: CardProps) => {
  const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

  return (
    <div
      className={classNames("flex w-[315px] h-[104px] bg-white rounded-lg p-4")}
      onClick={() => handleClick(pokemon)}
    >
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
