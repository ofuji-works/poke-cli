import type { Pokemon, PokemonApiResponse } from "@/features/pokemon"

export const pokemon: Pokemon = {
  name: "Suicune",
}

export const pokemonList: Pokemon[] = [
  {
    name: "Suicune",
  },
  {
    name: "Raikou",
  },
  {
    name: "Entei",
  },
]

export const pokemonApiResponse: PokemonApiResponse = {
  total: 3,
  results: pokemonList,
  next: "",
}
