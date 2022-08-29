import { PokemonContext } from '../contexts/PokemonContext';
//axios------------------------------------------------
import axios from 'axios';

//react features---------------------------------------
import { useState, useEffect,useContext } from 'react'

export default function Cards() {

// api request-------------------------------------

    const { pokemons, getPokemons } = useContext(PokemonContext)
    useEffect(() => {
        getPokemons();
    },[])

    return(
        <div className='Cards pokemon'>
            <ul className="w-full h-full flex justify-center gap-10 bg-white flex-wrap p-10">
                {pokemons.map((pokemon, i) =>{
                    return(
                        <li className='w-56 flex flex-col items-center text-2xl font-arial font-bold text-blue-500 justify-center rounded-md shadow-2xl shadow-zinc-800 h-44 bg-white' key={i}>
                            <img alt={pokemon.data.name}  src={pokemon.data.sprites.front_default}/>
                            {pokemon.data.name}
                        </li>
                    )
                })}
            </ul>
        </div>
   )
}
