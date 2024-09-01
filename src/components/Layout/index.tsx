import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Layout = (): JSX.Element => {
  return (
    <div className='relative flex min-h-screen flex-col justify-between gap-9 overflow-hidden dark:bg-pokeDarkGray'>
      <div className='flex flex-col gap-9'>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
