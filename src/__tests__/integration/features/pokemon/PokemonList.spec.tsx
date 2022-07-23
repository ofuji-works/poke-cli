import { render, screen } from "@testing-library/react"

import { PokemonList } from "@/features/pokemon"
import { pokemonList } from "@/mocks"

describe("features/PokemonList test", () => {
  beforeEach(() => {
    render(<PokemonList pokemons={pokemonList} />)
  })

  it("render a PokemonList", () => {
    pokemonList.forEach((pokemon) => {
      expect(screen.getByText(pokemon.name)).toBeInTheDocument()
    })
  })
})
