import React from 'react'
import { useQuery } from 'react-query'
import { pokemonApi } from '../api'

type PokemonCardProps = {
  name: string
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name }) => {
  const pokemon = useQuery(['pokemon', name], () => pokemonApi.getPokemon(name))

  console.log(pokemon)

  return (
    <>
      {name} <br></br>
    </>
  )
}

export default PokemonCard
