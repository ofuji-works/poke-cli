import { rest } from "msw"

import { pokemonApiResponse } from "@/mocks"

export const handlers = [
  rest.get("/pokemon", (_, res, ctx) => {
    res(ctx.status(200), ctx.json(pokemonApiResponse))
  }),
]
