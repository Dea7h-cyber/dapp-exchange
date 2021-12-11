import { Wrapper } from './styles'

interface Props {
  variant?: 'tertirary' | 'primary' | 'success'
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({ children, variant = 'tertirary', disabled, onClick }) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !disabled) onClick(e)
  }

  const buttonClass = [variant, disabled ? 'disabled' : 'enabled'].filter(Boolean).join(' ')

  return (
    <Wrapper onClick={handleOnClick} className={buttonClass}>
      {children}
    </Wrapper>
  )
}
