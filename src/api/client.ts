import axios from 'axios'

const instance = axios.create({
  // eslint-disable-next-line comma-dangle
  baseURL: 'https://pokeapi.co/api/v2',
})

export default instance
