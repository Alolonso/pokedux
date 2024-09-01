import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Error from './components/Error'

const App = () => {
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
