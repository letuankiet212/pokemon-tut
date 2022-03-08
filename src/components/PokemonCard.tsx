import React from 'react'
import { useQuery } from 'react-query'
import { pokemonApi } from '../api'

type PokemonCardProps = {
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const pokemon = useQuery(['pokemon', name], () => pokemonApi.getPokemon(name))

  console.log(pokemon)
  if (pokemon.isLoading) {
    return <>Loading...</>
  }

  return (
    <>
      <div>
        <div className="text-center">{pokemon.data?.data.name}</div>
        <div className="w-20 h-20 border-2 border-black rounded p-1 hover:bg-blue-400 transition-colors delay-75 cursor-pointer">
          <img
            src={pokemon.data?.data.sprites.other.dream_world.front_default}
            alt={'image' + name}
            className="object-scale-down w-full h-full"
          />
        </div>
      </div>
    </>
  )
}

export default PokemonCard
