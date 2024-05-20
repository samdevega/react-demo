interface ButtonProps extends React.PropsWithChildren {
  onClick?: () => void
}

export default function(props: ButtonProps) {
  const { children } = props
  return <button>{ children }</button>
}
