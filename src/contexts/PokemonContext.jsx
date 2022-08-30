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
    const [infoPokemon, setInfoPokemon] = useState([]);  

    // const tipos = pokemons.data.types

    // const typeHandler = () => {
    //   if (tipos[1]) {
    //     return tipos[0].type.name + " | " + types[1].type.name;
    //   }
    //   return tipos[0].type.name;
    // };
    return(
        <PokemonContext.Provider value={{infoPokemon, setInfoPokemon,pokemonFilter, setPokemons, pokemons, getPokemons}}>{children}</PokemonContext.Provider>
    )
}