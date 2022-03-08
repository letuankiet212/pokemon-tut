import React from 'react'
import { useQuery } from 'react-query'
import { pokemonApi } from '../api'
import { Link } from 'react-router-dom'

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
      <Link
        to={`/pokemon-detail/${name}`}
        className="block flex items-center border-2 border-black rounded hover:bg-blue-400 hover:shadow  transition-colors delay-75 cursor-pointer"
      >
        <div className="p-1">
          <img
            src={pokemon.data?.data.sprites.other.dream_world.front_default}
            alt={'image' + name}
            className="object-scale-down w-10 h-10"
          />
        </div>
        <div className="text-center capitalize">{pokemon.data?.data.name}</div>
      </Link>
    </>
  )
}

export default PokemonCard
