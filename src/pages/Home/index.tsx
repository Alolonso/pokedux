import { useSearchParams } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const Home = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const page = parseInt(searchParams.get('page') || '1', 10)
  return (
    <div className='flex flex-col gap-9'>
      <Pagination current={page} total={789} newLink='/?page=' />
    </div>
  )
}

export default Home
