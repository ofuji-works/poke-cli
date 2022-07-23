import { FC } from "react"

type Props = {
  onClick: () => void
  label: string
  ariaLabel: string
}

export const Button: FC<Props> = ({ onClick, label, ariaLabel }) => {
  return (
    <button onClick={onClick} aria-label={ariaLabel}>
      {label}
    </button>
  )
}
