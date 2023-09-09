import { useEffect, useState } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { Pokemon } from "./types/pokemon";
import Modal from "react-modal";
import { PokemonModal } from "./components/PokemonModal";

function App() {
  const [count, setCount] = useState<number>(151);
  const [sort, setSort] = useState<string>("id");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | null>();
  const [pokemonModalIsOpen, setPokemonModalIsOpen] = useState<boolean>(false);

  const modalCustomStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "500px",
    },
  };

  const pokemonData = usePokemonFilter({ count, sort });

  const handleCount = (value: number) => {
    if (value > 151) {
      value = 151;
    }
    setCount(value);
  };

  const handleSort = (value: string) => {
    setSort(value);
  };

  const handleCardClick = (pokemon: Pokemon) => {
    setCurrentPokemon(pokemon);
    setPokemonModalIsOpen(true);
  };

  const handleModalClose = () => {
    setPokemonModalIsOpen(false);
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
          <div className="flex flex-wrap justify-center md:justify-between gap-y-4">
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
      <Modal
        isOpen={pokemonModalIsOpen}
        onRequestClose={handleModalClose}
        style={modalCustomStyles}
        contentLabel="Pokemon"
        ariaHideApp={false}
      >
        <PokemonModal currentPokemon={currentPokemon} />
      </Modal>
    </div>
  );
}

export default App;
