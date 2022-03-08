/* eslint-disable prettier/prettier */
import { PokemonRes, PokemonsRes } from '../@types/api'
import client from './client'

const getAllPokemons = async (): Promise<PokemonsRes> => client.get('/pokemon?limit=200')
const getPokemon = async (name:string): Promise<PokemonRes> => client.get(`/pokemon/${name}`)
const pokemonApi = {
  getAllPokemons, getPokemon
}

export default pokemonApi
