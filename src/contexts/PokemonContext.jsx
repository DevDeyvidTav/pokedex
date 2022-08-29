import { createContext, useState } from "react";
import axios from "axios";
export const PokemonContext = createContext({})

export const PokemonProvider = ({children}) => {
    const getPokemons = () => {
        var endpoints = [];
        for (var i = 1; i < 200; i++) {
          endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        }
        axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
      };
    const [ pokemons, setPokemons] = useState([])
    const pokemonFilter = (name) => {
        var filteredPokemons = [];
        if (name === "") {
          getPokemons();
        }
        for (var i in pokemons) {
          if (pokemons[i].data.name.includes(name)) {
            filteredPokemons.push(pokemons[i]);
          }
        }
    
        setPokemons(filteredPokemons);
      };
    return(
        <PokemonContext.Provider value={{pokemonFilter, setPokemons, pokemons, getPokemons}}>{children}</PokemonContext.Provider>
    )
}