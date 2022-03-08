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
