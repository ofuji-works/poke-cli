export type PokemonApiResponse = {
  total: number
  results: {
    name: string
  }[]
  next: string
}

export type Pokemon = {
  name: string
}
