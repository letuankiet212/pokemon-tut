import React from 'react'
import { useQuery } from 'react-query'
import { pokemonApi } from '../api'

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
      {pokemons.data?.data.results.map((pokemon: any) => {
        return <div key={pokemon.name}>{pokemon.name}</div>
      })}
    </div>
  )
}

export default Home
