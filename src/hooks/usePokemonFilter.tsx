import { useEffect, useState } from "react";

type usePokemonFilterProps = {
  count: number;
};

export const usePokemonFilter = ({ count = 151 }: usePokemonFilterProps) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const pokemonApiString = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`;

    const fetchData = async () => {
      try {
        const res = await fetch(pokemonApiString);
        const json = await res.json();
        setPokemonData(json);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, [count]);

  return pokemonData;
};
