/* eslint-disable prettier/prettier */
import { PokemonRes, PokemonsRes } from '../@types/api'
import client from './client'

const getPokemons = async (): Promise<PokemonsRes> => client.get('/pokemon')
const getPokemon = async (name:string): Promise<PokemonRes> => client.get(`/pokemon/${name}`)
const pokemonApi = {
  getPokemons, getPokemon
}

export default pokemonApi
