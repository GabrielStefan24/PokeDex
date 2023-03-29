import Pokemons from "./components/Pokemons";
import { useState, useEffect } from "react";
import axios from "axios";
import { pokeball } from "./assets";

const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get(url);
        const response = res.data.results;
        const detailedPokemons = [];

        for (const pokemon of response) {
          const res = await axios.get(pokemon.url);
          const detailedPokemon = res.data;
          detailedPokemons.push(detailedPokemon);
        }

        setPokemons(detailedPokemons);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching pokemons", err);
      }
    };
    fetchPokemons();
  }, []);

  console.log(pokemons);

  // You can pass the fetched pokemons as a prop to your <Pokemons /> component
  return (
    <div className="App">
      <img
        src={pokeball}
        alt="pokeball"
        className=" hidden sm:block w-1/3  lg:w-1/4 absolute -top-20 -right-30 bg-opacity-30 -z-10"
      />
      <Pokemons pokemons={pokemons} />
    </div>
  );
};

export default App;
