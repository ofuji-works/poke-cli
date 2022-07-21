import { FC } from "react"

import { PokemonListItem } from "../PokemonListItem"

import type { Pokemon } from "../../types"

import "./style.scss"

type Props = {
  pokemons: Pokemon[]
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <section className='content'>
      <div className='content__list'>
        {pokemons.map((pokemon, index) => {
          return (
            <PokemonListItem
              key={`key-${pokemon.name}`}
              id={index + 1}
              {...pokemon}
            />
          )
        })}
      </div>
    </section>
  )
}
