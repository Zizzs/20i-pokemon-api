import { useEffect } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";

function App() {
  const count = 151;

  const pokemonData = usePokemonFilter({ count });

  console.log(pokemonData);

  return (
    <div>
      <div className="p-12">
        <Header className="pb-4" />
        {pokemonData.length ? (
          <div className="flex flex-wrap justify-between gap-y-4">
            {pokemonData.map((pokemon) => {
              return <Card pokemon={pokemon} />;
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
