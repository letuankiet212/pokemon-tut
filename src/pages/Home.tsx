import React from 'react'
import { useQuery } from 'react-query'
import { PokemonsResponseResult } from '../@types/api'
import { pokemonApi } from '../api'
import PokemonCard from '../components/PokemonCard'

const Home: React.FC = () => {
  const pokemons = useQuery('all-pokemons', () => {
    return pokemonApi.getAllPokemons()
  })

  if (pokemons.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-10 gap-1 px-1.5 ">
        {pokemons.data?.data.results.map(
          (pokemon: PokemonsResponseResult, index: number) => {
            return <PokemonCard key={index} name={pokemon.name} />
          }
        )}
      </div>
    </div>
  )
}

export default Home
