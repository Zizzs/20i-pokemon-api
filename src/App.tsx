import { useEffect, useState } from "react";
import { usePokemonFilter } from "./hooks/usePokemonFilter";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Loader } from "./components/Loader";
import { Pokemon, PokemonCard } from "./types/pokemon";
import Modal from "react-modal";
import { PokemonModal } from "./components/PokemonModal";
import { Footer } from "./components/Footer";

function App() {
  const [offset, setOffset] = useState<number>(0);
  const [sort, setSort] = useState<string>("id");
  const [totalShown, setTotalShown] = useState<number>(12);
  const [currentPokemon, setCurrentPokemon] = useState<PokemonCard | null>();
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

  const pokemonData = usePokemonFilter({ offset, sort });

  const handleOffset = (value: number) => {
    if (!(offset < 0) && !(offset > 1281)) {
      setOffset(value);
    }
  };

  const handleSort = (value: string) => {
    setSort(value);
    setOffset(0);
  };

  const handleTotalValue = (value: number) => {
    if (!Number.isNaN(value)) {
      setTotalShown(value);
    }
  };

  const handleCardClick = (pokemon: PokemonCard) => {
    setCurrentPokemon(pokemon);
    setPokemonModalIsOpen(true);
  };

  const handleModalClose = () => {
    setPokemonModalIsOpen(false);
  };

  let newShownPokemon: Array<PokemonCard> = [];

  if (pokemonData.length) {
    for (let i = offset; i < offset + totalShown; i++) {
      newShownPokemon.push(pokemonData[i]);
    }
  }

  return (
    <div className="h-full">
      <div className="container p-12 mx-auto">
        <Header
          className="pb-4"
          handleSort={handleSort}
          handleTotal={handleTotalValue}
          totalValue={totalShown}
          sort={sort}
        />
        {newShownPokemon ? (
          <div className="flex flex-wrap justify-center md:justify-between gap-y-4">
            {newShownPokemon.map((pokemon, index) => {
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
      <Footer
        currentOffset={offset}
        setNewOffset={handleOffset}
        totalShown={totalShown}
      />

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
