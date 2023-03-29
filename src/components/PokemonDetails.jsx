import React from "react";

const PokemonDetails = ({ pokemon, onBack }) => {
  return (
    <div className="w-5/6 mx-auto px-5 relative">
      <header className="flex flex-col justify-center items-center">
        <button
          className="self-start mb-5 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onBack}
        >
          Go Back
        </button>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black mt-10">
          {pokemon.forms[0].name}
        </h1>
      </header>

      <section className="mt-10">
        {/* Render Pokémon details */}
        {/* ... */}
      </section>
    </div>
  );
};

export default PokemonDetails;
