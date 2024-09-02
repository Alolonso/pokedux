import { createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemonList } from '../../../api/pokeapi'
import { setPokemonList, setPokemonCount } from '../pokeSlice'
import { setLoading, setError } from '../uiSlice'

export const fetchInitialPokemonData = createAsyncThunk(
  'pokemon/fetchInitialPokemonData',
  async (_, { dispatch }) => {
    dispatch(setLoading(true))
    try {
      const { count, results, error } = await getPokemonList()

      if (error) {
        throw new Error(error)
      }

      dispatch(setPokemonList(results ?? []))
      dispatch(setPokemonCount(count ?? 0))
    } catch (error: unknown) {
      const errorMessage = (error as { message: string }).message
      dispatch(setError(errorMessage))
    } finally {
      dispatch(setLoading(false))
    }
  }
)
