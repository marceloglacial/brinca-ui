import Button, { ButtonProps } from '@components/Button/Button'
import { FC } from 'react'
import styles from './HeroStyles'

export interface HeroButtonProps {
    className?: string
}

const HeroButton: FC<HeroButtonProps & ButtonProps> = (props): JSX.Element => {
    const { className = '' } = props
    return (
        <div className={`${styles.buttom} ${className}`}>
            <Button {...props} />
        </div>
    )
}
export default HeroButton
