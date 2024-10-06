import { useSearchParams, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'
import PokemonList from '../../components/PokemonList'
import { useEffect } from 'react'
import { usePokemonList } from '../../hooks/usePokemonList'

const getPage = (param: string | null): number => {
  const page = parseInt(param || '1', 10)
  return isNaN(page) ? 1 : page
}

const Home = (): JSX.Element => {
  const { error, loading } = useAppSelector((state) => state.ui)
  const { pokemonList, pokemonCount } = useAppSelector((state) => state.pokemon)
  const totalPages = Math.ceil(pokemonCount / 20)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const currentPage = getPage(searchParams.get('page'))

  const { pokemonDetailedList } = usePokemonList(currentPage, pokemonList)

  useEffect(() => {
    if (pokemonCount > 0) {
      if (currentPage < 1 || currentPage > totalPages) {
        navigate('/?page=1')
      }
    }
  }, [currentPage, pokemonCount, navigate])

  return (
    <>
      {error ? (
        <Error message={error} />
      ) : loading ? (
        <div className='absolute flex h-screen w-full items-center'>
          <Loading />
        </div>
      ) : (
        <div className='flex flex-col gap-9'>
          <Pagination
            current={currentPage}
            total={totalPages}
            newLink='/?page='
          />
          <PokemonList pokemonList={pokemonDetailedList} />
          <Pagination
            current={currentPage}
            total={totalPages}
            newLink='/?page='
          />
        </div>
      )}
    </>
  )
}

export default Home
