
//axios------------------------------------------------
import axios from 'axios';

//react features---------------------------------------
import { useState, useEffect } from 'react'

export default function Cards() {

// api request-------------------------------------

    const [ pokemons, setPokemons] = useState([])
    useEffect(() => {
        getPokemons();
    },[])

    const getPokemons = () =>{
        var endpoits = [];
        for (var i = 1; i < 50; i++) {
            endpoits.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }
        var reponse = axios.all(endpoits.map(endpoint => axios.get(endpoint))).then(res => setPokemons(res))
    }


    
    return(
        <div className='Cards pokemon'>
            <ul className="w-full h-full flex justify-center gap-10 bg-blue-500 flex-wrap p-10">
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
