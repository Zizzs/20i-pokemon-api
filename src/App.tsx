import { useEffect, useState } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";

function App() {
  const [count, setCount] = useState<number>(151);
  const [sort, setSort] = useState<string>("id");

  const pokemonData = usePokemonFilter({ count, sort });

  const handleCount = (value: number) => {
    setCount(value);
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

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
              return <Card key={`pokemon-card-${index}`} pokemon={pokemon} />;
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
