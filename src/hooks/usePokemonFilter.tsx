import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

type usePokemonFilterProps = {
  count: number;
};

export const usePokemonFilter = ({ count = 151 }: usePokemonFilterProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    // Build Pokemon API String
    const pokemonApiString = `https://pokeapi.co/api/v2/pokemon?limit=${count}&offset=0`;

    const fetchData = async () => {
      try {
        // Create Array to hold Pokemon Data
        const pokemonDataTemp = [];

        // Fetch the initial API response that will hold the pokemon API routes
        const res = await fetch(pokemonApiString);
        const json = await res.json();

        // Loop over the returned data to retrieve individual pokemon data
        for (let obj of json.results) {
          const resTwo = await fetch(obj.url);
          const jsonTwo: Pokemon = await resTwo.json();
          pokemonDataTemp.push(jsonTwo);
        }

        // Set to state
        setPokemonData(pokemonDataTemp);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchData();
  }, [count]);

  return pokemonData;
};
