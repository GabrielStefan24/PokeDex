import { pokeball } from "../assets";
import { useState, useEffect } from "react";
import Color from "../utils/Color";
import ColorButton from "../utils/ColorButton";
import capitalizeFirstLetter from "../utils/Capitalize";

const Pokemons = ({ pokemons, loading, handlePokemonClick }) => {
  const [search, setSearch] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) =>
        pokemon.forms[0].name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemons]);

  return (
    <div className=" w-5/6 mx-auto px-5 relative py-6">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-black mt-10">
          PokeDex
        </h1>

        <input
          type="text"
          value={search}
          className=" mt-5 w-1/2 sm:w-1/3 px-4 py-2 text-base text-gray-700 placeholder-gray-600 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out"
          placeholder="Search pokemon"
          onChange={handleSearchChange}
        />
      </header>
      {loading ? (
        <h1 className="text-4xl text-center">
          Please wait,loading takes a bit first time...
        </h1>
      ) : (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 mt-10">
          {filteredPokemons &&
            filteredPokemons.map((pokemon) => {
              return (
                <article
                  onClick={() => handlePokemonClick(pokemon)}
                  key={pokemon.id}
                  style={{
                    backgroundColor: Color(pokemon.types[0].type.name),
                  }}
                  className="flex hover:scale-105 transition-all ease-in duration-200 rounded-[30px]  p-4 relative overflow-hidden min-h-[250px] cursor-pointer"
                >
                  <div className="text-left mb-2 flex-1 font-mono text-white ">
                    {pokemon.forms.length > 0 && (
                      <h1 className="font-bold text-lg px-2 ">
                        {capitalizeFirstLetter(pokemon.forms[0].name)}
                      </h1>
                    )}
                    {pokemon.types.map((pokemonType) => (
                      <p
                        key={pokemonType.type.name}
                        className="text-sm inline-block mx-1 p-2 rounded-full mt-1"
                        style={{
                          backgroundColor: ColorButton(pokemonType.type.name),
                        }}
                      >
                        {pokemonType.type.name}
                      </p>
                    ))}
                  </div>
                  <div className="flex-1">
                    <img
                      src={pokeball}
                      alt="pokeball"
                      className="w-2/3 absolute -bottom-4 -right-4 opacity-50 object-contain"
                    />
                    <img
                      loading="lazy"
                      src={pokemon.sprites.other.home.front_default}
                      alt={pokemon.name}
                      className="min-h-[140px] h-[180px] absolute bottom-0 right-1"
                    />
                  </div>
                </article>
              );
            })}
        </section>
      )}
    </div>
  );
};

export default Pokemons;
