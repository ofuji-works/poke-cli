import { FC } from "react"

import { useGetPokemons } from "../api"
import { PokemonList } from "../component"

export const EnhancedPokemonList: FC = () => {
  const { data } = useGetPokemons()
  return <PokemonList pokemons={data} />
}
