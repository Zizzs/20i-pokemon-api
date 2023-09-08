import { useEffect } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";

function App() {
  const count = 151;

  const pokemon = usePokemonFilter({ count });

  console.log(pokemon);

  return (
    <div>
      <div className="p-12"></div>
    </div>
  );
}

export default App;
