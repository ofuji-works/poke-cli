export type PokemonApiResponse = {
  total: number
  results: Pokemon[]
  next: string
}

export type Pokemon = {
  name: string
}
