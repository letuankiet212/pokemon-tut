import React from 'react'
import { useQuery } from 'react-query'
import { PokemonsResponseResult } from '../@types/api'
import { pokemonApi } from '../api'
import PokemonCard from '../components/PokemonCard'

const Home: React.FC = () => {
  const pokemons = useQuery('pokemons', () => {
    return pokemonApi.getPokemons()
  })

  if (pokemons.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Home</h1>
      {pokemons.data?.data.results.map(
        (pokemon: PokemonsResponseResult, index: number) => {
          return <PokemonCard key={index} name={pokemon.name} />
        }
      )}
    </div>
  )
}

export default Home
