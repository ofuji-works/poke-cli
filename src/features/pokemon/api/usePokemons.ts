import { useCallback, useEffect, useState } from "react"
import { client, AxiosError } from "@/utils"

type PokemonApiResponse = {
  total: number
  results: {
    name: string
  }[]
  next: string
}

export const useGetPokemons = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<AxiosError | null>(null)

  useEffect(() => {
    setError(null)
    setLoading(true)
    client
      .get("/pokemon")
      .then((res) => {
        setData(res.data)
      })
      .catch((err: AxiosError) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const refetch = useCallback(() => {
    setError(null)
    setLoading(true)
    client
      .get("/pokemon")
      .then((res) => {
        setData(res.data)
      })
      .catch((err: AxiosError) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, loading, error, refetch }
}
