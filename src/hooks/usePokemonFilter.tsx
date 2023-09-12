import { useEffect, useState } from "react";
import { Pokemon, PokemonCard } from "../types/pokemon";

type usePokemonFilterProps = {
  offset: number;
  sort: string;
};

export const usePokemonFilter = ({
  offset = 0,
  sort,
}: usePokemonFilterProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonCard[]>([]);
  const [shownPokemon, setShownPokemon] = useState<PokemonCard[]>([]);

  useEffect(() => {
    // Build Pokemon API String
    const pokemonApiString = `https://pokeapi.co/api/v2/pokemon?limit=100000`;

    const fetchData = async () => {
      try {
        // Create Array to hold Pokemon Data
        const pokemonDataTemp = [];

        // Fetch the initial API response that will hold the pokemon API routes
        const res = await fetch(pokemonApiString);
        const json = await res.json();

        // Loop over the returned data to add in pokemon images
        for (let obj of json.results) {
          // const resTwo = await fetch(obj.url);
          // const jsonTwo: Pokemon = await resTwo.json();
          const pokemonNumber = obj.url.slice(34).slice(0, -1);
          const pokemonImageLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;

          const pokemon = {
            name: obj.name,
            number: pokemonNumber,
            image: pokemonImageLink,
            url: obj.url,
          };

          pokemonDataTemp.push(pokemon);
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
        pokemonDataTemp.sort((pokemonA: PokemonCard, pokemonB: PokemonCard) => {
          const nameA = pokemonA.name.toUpperCase();
          const nameB = pokemonB.name.toUpperCase();

          return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
        });
      }

      if (sort === "id") {
        pokemonDataTemp.sort((pokemonA: PokemonCard, pokemonB: PokemonCard) => {
          const idA = parseInt(pokemonA.number);
          const idB = parseInt(pokemonB.number);

          return idA < idB ? -1 : idA > idB ? 1 : 0;
        });
      }

      setPokemonData(pokemonDataTemp);
    };

    if (pokemonData.length) {
      filterData();
    } else {
      fetchData();
    }
  }, [offset, sort]);

  return pokemonData;
};
