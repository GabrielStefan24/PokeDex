import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import capitalizeFirstLetter from "../utils/Capitalize";
import { pokeball } from "../assets";
import Color from "../utils/Color";
import { useEffect, useState } from "react";
import axios from "axios";
import ProgressBar from "@ramonak/react-progress-bar";
const PokemonDetails = ({ pokemon, onBack }) => {
  console.log(pokemon);
  const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`;
  const [description, setDescription] = useState([]);
  useEffect(() => {
    const fetchDescription = async () => {
      try {
        const res = await axios.get(url);
        const response = res.data.flavor_text_entries;
        setDescription(response[10].flavor_text);
      } catch (err) {
        console.log("Error loading description", err);
      }
    };
    fetchDescription();
  }, []);

  return (
    <div
      className="container px-5 relative "
      style={{
        backgroundColor: Color(pokemon.types[0].type.name),
        minHeight: "100vh",
      }}
    >
      <header className="flex justify-between max-w-4xl mx-auto  items-start min-h-[260px]">
        <div className="flex mt-6 ">
          <button className="hover:scale-105 z-40" onClick={onBack}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="h-8 md:h-10 lg:h-12 mr-10 text-white"
            />
          </button>
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white ">
            {capitalizeFirstLetter(pokemon.forms[0].name)}
          </h1>
        </div>
        <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white mt-6">
          #{pokemon.id}
        </p>
        <img
          src={pokeball}
          alt="pokeball"
          className="absolute w-5/6 opacity-20  top-10 left-[50%] translate-x-[-50%] md:w-2/4"
        />
        <img
          src={pokemon.sprites.other.home.front_default}
          alt="image of the pokemon"
          className="absolute top-20 sm:-top-16 left-[50%] translate-x-[-50%] w-[250px] md:w-[400px] z-20"
        />
      </header>

      <section className=" relative z-10 mt-10 flex flex-col items-center px-6 mx-auto bg-slate-100 rounded-lg ">
        <div className="flex ">
          {pokemon.types.map((pokemonType) => (
            <p
              key={pokemonType.type.url}
              className=" inline-block mx-5 px-4 py-1 rounded-full mt-14 text-xl md:text-2xl lg:3xl text-white font-bold"
              style={{
                backgroundColor: Color(pokemonType.type.name),
              }}
            >
              {capitalizeFirstLetter(pokemonType.type.name)}
            </p>
          ))}
        </div>
        <p
          style={{
            color: Color(pokemon.types[0].type.name),
          }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4 "
        >
          About
        </p>
        <div className="mt-4 flex gap-4 w-3/4  text-slate-800 font-bold text-sm md:text-2 justify-center md:gap-32">
          <div className="border-r-[1px] border-solid border-x-zinc-900 px-2">
            <p>Weight</p>
            <p className="font-medium">{pokemon.weight} kg</p>
          </div>
          <div className="border-r-[1px] border-solid border-x-zinc-900 px-2">
            <p>Height</p>
            <p className="font-medium">{pokemon.height} m</p>
          </div>
          <div>
            <p>Abilities</p>
            <div className="font-medium">
              {pokemon.abilities.map((pokemonAbility, index) => {
                return (
                  <p key={index}>
                    {capitalizeFirstLetter(pokemonAbility.ability.name)}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
        <h3 className="mt-6 text-slate-800 md:text-2xl">{description}</h3>
        <h3
          className="text-2xl md:text-3xl lg:text-4xl font-bold mt-4"
          style={{
            color: Color(pokemon.types[0].type.name),
          }}
        >
          Stats
        </h3>
        <section className="flex flex-col w-full sm:w-5/6 text-[10px] sm:text-xl ">
          <div className="grid grid-cols-8">
            <p
              className="font-bold  "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              HP
            </p>
            <p className="">{pokemon.stats[0].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                customLabel=" "
                completed={pokemon.stats[0].base_stat / 2}
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>
          <div className="grid grid-cols-8  ">
            <p
              className="font-bold "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              ATK
            </p>
            <p className="">{pokemon.stats[1].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                customLabel=" "
                completed={pokemon.stats[1].base_stat / 2}
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-8 ">
            <p
              className="font-bold "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              DEF
            </p>
            <p className="">{pokemon.stats[2].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                customLabel=" "
                completed={pokemon.stats[2].base_stat / 2}
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-8  ">
            <p
              className="font-bold  "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              SATK
            </p>
            <p className="">{pokemon.stats[3].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                completed={pokemon.stats[3].base_stat / 2}
                customLabel=" "
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>{" "}
          <div className="grid grid-cols-8 ">
            <p
              className="font-bold "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              SDEF
            </p>
            <p className="">{pokemon.stats[4].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                customLabel=" "
                completed={pokemon.stats[4].base_stat / 2}
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>
          <div className="grid grid-cols-8 ">
            <p
              className="font-bold "
              style={{
                color: Color(pokemon.types[0].type.name),
              }}
            >
              SPD
            </p>
            <p className="">{pokemon.stats[5].base_stat}</p>
            <div className="w-full flex col-span-6">
              <ProgressBar
                customLabel=" "
                completed={pokemon.stats[5].base_stat / 2}
                bgColor={Color(pokemon.types[0].type.name)}
                height="10px"
                className="self-center grow"
              />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default PokemonDetails;
