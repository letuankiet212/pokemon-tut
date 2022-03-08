import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { pokemonApi } from '../api'

const PokemonDetail: React.FC = () => {
  const { pokemon: pokemonName } = useParams()

  const PokemonDetail = useQuery(['pokemon-detail', pokemonName], () => {
    if (pokemonName) {
      return pokemonApi.getPokemon(pokemonName)
    }
  })

  console.log(PokemonDetail)

  if (PokemonDetail.isLoading) {
    return <div>Loading...</div>
  }

  console.log(PokemonDetail)

  return <div> {PokemonDetail.data?.data.name}</div>
}

export default PokemonDetail
