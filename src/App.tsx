import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Error from './components/Error'
import { useEffect } from 'react'
import { useAppDispatch } from './store'
import { fetchInitialPokemonData } from './store/slices/thunks/fetchInitialPokemonData'

const App = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchInitialPokemonData())
  }, [dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<Error message='Not found' />} />
      </Route>
    </Routes>
  )
}

export default App
