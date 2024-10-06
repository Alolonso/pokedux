import { GitHubIcon, AlolonsoIcon } from '../../assets/icons'

const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col items-center gap-1 bg-gray-100 py-5 dark:bg-pokeLightGray'>
      <div className='flex h-7 items-center gap-3'>
        <a
          className='transition-transform hover:scale-125'
          href='https://github.com/Alolonso/pokedux'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GitHubIcon className='h-auto w-7 text-pokeLightGray dark:text-pokeDarkRed' />
        </a>
        <a
          className='transition-transform hover:scale-125'
          href='https://alolonso.github.io/cv-portfolio/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AlolonsoIcon className='h-auto w-8' />
        </a>
      </div>
      <p>
        <span className='text-sm text-gray-400 dark:text-gray-200'>
          made by{' '}
        </span>
        <a
          className='text-base text-gray-500 hover:underline dark:text-gray-300'
          href='https://alolonso.github.io/cv-portfolio/'
          target='_blank'
          rel='noopener noreferrer'
        >
          alolonso
        </a>
      </p>
    </footer>
  )
}

export default Footer
