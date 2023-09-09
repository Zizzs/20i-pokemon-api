import { useEffect, useState } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { Pokemon } from "./types/pokemon";

function App() {
  const [count, setCount] = useState<number>(151);
  const [sort, setSort] = useState<string>("id");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>();

  const pokemonData = usePokemonFilter({ count, sort });

  const handleCount = (value: number) => {
    setCount(value);
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  const handleCardClick = (pokemon: Pokemon) => {
    setCurrentPokemon(pokemon);
  };

  console.log(currentPokemon);

  return (
    <div>
      <div className="p-12">
        <Header
          className="pb-4"
          handleCount={handleCount}
          handleSort={handleSort}
          count={count}
          sort={sort}
        />
        {pokemonData.length ? (
          <div className="flex flex-wrap justify-between gap-y-4">
            {pokemonData.map((pokemon, index) => {
              return (
                <Card
                  key={`pokemon-card-${index}`}
                  pokemon={pokemon}
                  handleClick={handleCardClick}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full my-60 flex justify-center">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
