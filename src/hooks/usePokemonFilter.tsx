import { useEffect, useState } from "react";
import { Pokemon } from "../types/pokemon";

type usePokemonFilterProps = {
  count: number;
  sort: string;
};

export const usePokemonFilter = ({
  count = 151,
  sort,
}: usePokemonFilterProps) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  if (Number.isNaN(count)) {
    count = 1;
  }

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

    // Filter function runs when the count does not change
    const filterData = () => {
      // Deep clone the array so no wonky pointer crap happens when mutating
      const pokemonDataTemp = JSON.parse(JSON.stringify(pokemonData));

      if (sort === "name") {
        pokemonDataTemp.sort((pokemonA: Pokemon, pokemonB: Pokemon) => {
          const nameA = pokemonA.name.toUpperCase();
          const nameB = pokemonB.name.toUpperCase();

          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });
      }

      if (sort === "id") {
        pokemonDataTemp.sort((pokemonA: Pokemon, pokemonB: Pokemon) => {
          const idA = pokemonA.id;
          const idB = pokemonB.id;

          return idA < idB ? -1 : idA > idB ? 1 : 0;
        });
      }

      setPokemonData(pokemonDataTemp);
    };

    if (pokemonData.length !== count) {
      fetchData();
    } else {
      filterData();
    }
  }, [count, sort]);

  return pokemonData;
};
