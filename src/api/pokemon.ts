/* eslint-disable prettier/prettier */
import { PokemonsRes } from '../@types/api'
import client from './client'

const getPokemons = async (): Promise<PokemonsRes> => client.get('/pokemon')

const pokemonApi = {
  getPokemons
}

export default pokemonApi
