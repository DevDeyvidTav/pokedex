import { useContext } from "react"
import { PokemonContext } from "../contexts/PokemonContext"
import { NavLink } from 'react-router-dom'

export function Info() {
    const { infoPokemon } = useContext(PokemonContext)
    console.log(infoPokemon)
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col w-3/4 mt-20 md:w-2/4 p-6 h-5/6 justify-center items-center shadow-2xl">
                <h2 className="flex text-3xl uppercase font-bold text-blue-500">{infoPokemon.data.name}</h2>
                <div className="flex">
                    <img className="w-56" src={infoPokemon.data.sprites.back_default} alt="" />
                    <img className="w-56" src={infoPokemon.data.sprites.front_default} alt="" />

                </div>
                <div className="flex items-center justify-center flex-col w-3/4 mb-10">
                    <strong>Tipo do pokemon:</strong>
                    <p>{infoPokemon.data.types[0].type.name}</p>

                </div>

                <div className="mb-10">
                    <strong>Habilidades:</strong>
                    <p>{infoPokemon.data.abilities[0].ability.name}</p>
                    <p>{infoPokemon.data.abilities[1].ability.name}</p>
                </div>
                <NavLink to="/"><button className="bg-blue-500 text-white font-bold p-1 rounded-md hover:bg-blue-300 hover:duration-300">Voltar para o início</button></NavLink>

            </div>
        </div>
    )
}