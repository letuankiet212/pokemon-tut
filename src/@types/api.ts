/* eslint-disable camelcase */
export type PokemonsResponseResult = {
  name: string
  url: string
}

export type PokemonsRes = {
  data: {
    const: number
    next: string | null
    previous: string | null
    results: PokemonsResponseResult[]
  }
}

export type PokemonRes = {
  data: {
    name: string
    sprites: {
      other: {
        dream_world: {
          front_default: string
        }
      }
    }
  }
}

export type DetailPokemonRes = {
  data: {}
}
