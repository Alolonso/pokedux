const PokemonIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='286'
      height='286'
      aria-hidden='true'
      fill='currentColor'
      viewBox='0 0 286 286'
      {...props}
    >
      <path
        fill='currentColor'
        fillRule='evenodd'
        clipRule='evenodd'
        d='M286 152H175.86C171.907 166.41 158.693 177 143 177C127.307 177 114.093 166.41 110.14 152H5.04175e-08C4.65331 226.784 66.8978 286 143 286C219.102 286 281.347 226.784 286 152ZM286 134H175.86C171.907 119.59 158.693 109 143 109C127.307 109 114.093 119.59 110.14 134H0C4.65331 59.2161 66.8978 0 143 0C219.102 0 281.347 59.2161 286 134Z'
      />
    </svg>
  )
}

export default PokemonIcon
