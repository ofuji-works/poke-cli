import { renderHook } from "@testing-library/react-hooks"

import { useGetPokemons } from "@/features/pokemon"

describe("features/usePokemons test", () => {
  let result
  beforeAll(() => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { worker } = require("@/msw")
    worker.start()
  })
  beforeEach(() => {
    result = renderHook(() => useGetPokemons())
  })
})
