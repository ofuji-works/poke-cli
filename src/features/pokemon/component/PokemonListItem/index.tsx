import { FC } from "react"

import { Pokemon } from "../../types"

import { OFFICIAL_ARTWORK_BASEURL } from "@/config"
import { localeToJaForPokemonName } from "@/utils"

import "./style.scss"

type Props = Pokemon & {
  id: number
}

export const PokemonListItem: FC<Props> = ({ name, id }) => {
  return (
    <div className='pokemon'>
      <figure>
        <img
          className='pokemon__image'
          src={`${OFFICIAL_ARTWORK_BASEURL}${id}.png`}
          alt={name}
        />
      </figure>
      <h3 className='pokemon__name'>{name}</h3>
    </div>
  )
}
