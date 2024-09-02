import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Error from '../../components/Error'
import Loading from '../../components/Loading'
import Pagination from '../../components/Pagination'

const Home = (): JSX.Element => {
  const { error, loading } = useAppSelector((state) => state.ui)
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1', 10)

  return (
    <>
      {error && <Error message={error} />}
      {loading && !error && (
        <div className='absolute flex h-screen w-full items-center'>
          <Loading />
        </div>
      )}
      {!error && !loading && (
        <div className='flex flex-col gap-9'>
          <Pagination current={page} total={789} newLink='/?page=' />
        </div>
      )}
    </>
  )
}

export default Home
