import { PokeballIcon } from '../../assets/icons'

const Loading = (): JSX.Element => {
  return (
    <div className='flex w-full justify-center'>
      <PokeballIcon
        className='h-auto w-14 animate-spin'
        color1='#524d4d'
        color2='#f48282'
        color3='#d1d5db'
      />
    </div>
  )
}

export default Loading
