import Header from '../Header'
import Footer from '../Footer'

export const Layout = (): JSX.Element => {
  return (
    <div className='relative flex min-h-screen flex-col justify-between gap-9 overflow-hidden'>
      <div className='flex flex-col gap-9'>
        <Header />
      </div>
      <Footer />
    </div>
  )
}
