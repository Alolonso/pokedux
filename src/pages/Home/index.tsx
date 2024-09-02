import { useSearchParams } from 'react-router-dom'
import { useAppSelector } from '../../store'
import Error from '../../components/Error'
import Pagination from '../../components/Pagination'

const Home = (): JSX.Element => {
  const { error } = useAppSelector((state) => state.ui)
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1', 10)

  return (
    <>
      {error && <Error message={error} />}

      {!error && (
        <div className='flex flex-col gap-9'>
          <Pagination current={page} total={789} newLink='/?page=' />
        </div>
      )}
    </>
  )
}

export default Home
