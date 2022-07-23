import { render, screen } from "@testing-library/react"

import { PokemonListItem } from "@/features/pokemon"
import { pokemon } from "@/mocks"

describe("features/PokemonListItem test", () => {
  beforeEach(() => {
    render(<PokemonListItem id={0} {...pokemon} />)
  })
  it("reander a PokemonListItem", () => {
    expect(screen.getByText(pokemon.name)).toBeInTheDocument()
  })
})
