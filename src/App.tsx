import { useEffect } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";

function App() {
  const count = 151;

  const pokemonData = usePokemonFilter({ count });

  console.log(pokemonData);

  return (
    <div>
      <div className="p-12">
        <Header />
        <div className="flex flex-wrap justify-between gap-y-4">
          {pokemonData.map((pokemon) => {
            return <Card pokemon={pokemon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
