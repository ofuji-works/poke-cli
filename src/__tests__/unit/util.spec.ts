import { localeToJaForPokemonName } from "@/utils"

describe("utils test", () => {
  it("localeToJaForPokemonName test", () => {
    expect(localeToJaForPokemonName("Bulbasaur")).toBe("フシギダネ")
  })
})
