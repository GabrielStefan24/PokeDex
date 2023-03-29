import { pokeball } from "../assets";
import { useState, useEffect } from "react";

const Pokemons = ({ pokemons }) => {
  const [search, setSearch] = useState("");
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className=" w-5/6 mx-auto px-5 relative">
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
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-10">
        {pokemons &&
          pokemons.map((pokemon) => {
            console.log(pokemon.types[0]);
            return (
              <article
                key={pokemon.id}
                className={`flex ${
                  pokemon.types[0].type.name == "grass"
                    ? "bg-green-500"
                    : pokemon.types[0].type.name == "fire"
                    ? "bg-red-500"
                    : pokemon.types[0].type.name == "normal"
                    ? "bg-gray-500"
                    : pokemon.types[0].type.name == "bug"
                    ? "bg-green-800"
                    : pokemon.types[0].type.name == "water"
                    ? "bg-blue-500"
                    : pokemon.types[0].type.name == "poison"
                    ? "bg-purple-600"
                    : pokemon.types[0].type.name == "electric"
                    ? "bg-yellow-500"
                    : pokemon.types[0].type.name == "fairy"
                    ? "bg-pink-300"
                    : pokemon.types[0].type.name == "ground"
                    ? "bg-amber-200"
                    : pokemon.types[0].type.name == "fighting"
                    ? "bg-red-900"
                    : pokemon.types[0].type.name == "rock"
                    ? "bg-yellow-800"
                    : pokemon.types[0].type.name == "ghost"
                    ? "bg-purple-900"
                    : "bg-pink-600"
                } p-4 rounded relative overflow-hidden min-h-[300px]`}
              >
                <div className="text-left mb-2 flex-1 font-mono text-white ">
                  {pokemon.forms.length > 0 && (
                    <h1 className="font-bold text-lg px-2 ">
                      {pokemon.forms[0].name}
                    </h1>
                  )}
                  {pokemon.types.map((typepoke) => (
                    <p
                      key={typepoke.type.name}
                      className={`text-sm inline-block mx-1 p-2 rounded-full mt-1 ${
                        typepoke.type.name == "grass"
                          ? "bg-green-600"
                          : typepoke.type.name == "fire"
                          ? "bg-red-600"
                          : typepoke.type.name == "normal"
                          ? "bg-gray-600"
                          : typepoke.type.name == "bug"
                          ? "bg-green-900"
                          : typepoke.type.name == "water"
                          ? "bg-blue-600"
                          : typepoke.type.name == "poison"
                          ? "bg-purple-700"
                          : typepoke.type.name == "electric"
                          ? "bg-yellow-600"
                          : typepoke.type.name == "fairy"
                          ? "bg-pink-400"
                          : typepoke.type.name == "ground"
                          ? "bg-amber-300"
                          : typepoke.type.name == "fighting"
                          ? "bg-red-800"
                          : typepoke.type.name == "rock"
                          ? "bg-yellow-900"
                          : typepoke.type.name == "ghost"
                          ? "bg-purple-800"
                          : typepoke.type.name == "psychic"
                          ? "bg-pink-700"
                          : typepoke.type.name == "ice"
                          ? "bg-blue-400"
                          : "bg-gray-400"
                      }`}
                    >
                      {typepoke.type.name}
                    </p>
                  ))}
                </div>
                <div className="flex-1">
                  <img
                    src={pokeball}
                    alt="pokeball"
                    className="w-32 absolute -bottom-4 -right-4 opacity-50 object-contain"
                  />
                  <img
                    loading="lazy"
                    src={pokemon.sprites.other.home.front_default}
                    alt={pokemon.name}
                    className="min-h-[100px] h-[200px] absolute bottom-0 right-5"
                  />
                </div>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default Pokemons;
