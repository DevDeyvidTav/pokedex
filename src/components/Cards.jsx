import { PokemonContext } from '../contexts/PokemonContext';
//axios------------------------------------------------
import axios from 'axios';

//react features---------------------------------------
import { useEffect, useContext } from 'react'

//muiFeatures----------------------------------------------------
import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {NavLink} from 'react-router-dom'

export default function Cards() {

    // api request-------------------------------------
    
    const { pokemons, getPokemons,setInfoPokemon } = useContext(PokemonContext)
    useEffect(() => {
        getPokemons();
    }, [])
    return (
        <div className='Cards pokemon'>
            <ul className="w-full h-full flex justify-center gap-10 bg-white flex-wrap p-10">
                {pokemons.map((pokemon, i) => {
                    return (
                        <li className='w-56 flex flex-col items-center text-2xl font-arial font-bold text-blue-500 justify-center rounded-md shadow-2xl shadow-zinc-800 h-56 gap-4 bg-white' key={i}>
                            <img alt={pokemon.data.name} src={pokemon.data.sprites.front_default} />
                            {pokemon.data.name}
                            <NavLink to="/info"><Button onClick={()=>setInfoPokemon(pokemon)} variant="outlined">Mais Informações</Button></NavLink>
                           
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
