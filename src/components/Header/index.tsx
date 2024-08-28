import { useState } from 'react'
import Icons from '../../assets/icons'

const Header = (): JSX.Element => {
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false)
  const burgerClass =
    'h-1 w-9 transform rounded transition-transform duration-500'

  const updateMenu = (): void => {
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <header className='flex h-24 items-center justify-between bg-pokeDarkRed px-5 shadow-md'>
      <p>
        <span className='-mr-1 text-5xl text-white'>P</span>
        <span className='-mr-1 inline-block -rotate-45 font-essentiarum text-3xl text-pokeLightGray'>
          Xzx
        </span>
        <span className='text-5xl text-white'>kedux</span>
      </p>

      <div>
        <div className='sm:hidden'>
          {/* hamburguer icon */}
          <button
            className='relative z-10 flex flex-col gap-1.5'
            onClick={updateMenu}
          >
            <div
              className={`${burgerClass} ${isMenuClicked ? 'translate-y-2.5 rotate-45 bg-pokeLightGray' : 'bg-white'} `}
            ></div>
            <div
              className={`${burgerClass} ${isMenuClicked ? 'scale-0 bg-pokeLightGray' : 'bg-white'} `}
            ></div>
            <div
              className={`${burgerClass} ${isMenuClicked ? '-translate-y-2.5 -rotate-45 bg-pokeLightGray' : 'bg-white'} `}
            ></div>
          </button>

          {/* mobile menu */}
          <div
            className={`absolute -right-[76px] top-0 flex h-[196px] w-[76px] transform flex-col items-center justify-end gap-4 rounded-bl-2xl bg-pokeLightRed pb-4 shadow-md transition-transform duration-500 ${isMenuClicked ? '-translate-x-[76px]' : ''}`}
          >
            <a
              href='https://github.com/Alolonso/pokedux'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icons.Github className='h-auto w-9 text-white' />
            </a>
            <button className='ml-1'>
              <Icons.Dark className='h-auto w-11 text-white' />
            </button>
          </div>
        </div>

        {/* desktop menu */}
        <div className='hidden items-center gap-3 sm:flex'>
          <a
            href='https://github.com/Alolonso/pokedux'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Icons.Github className='h-auto w-9 text-white hover:text-pokeLightGray' />
          </a>
          <button>
            <Icons.Dark className='h-auto w-11 text-white hover:text-pokeLightGray' />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
