import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroBodyProps {
    className?: string
    children: ReactNode
}

const HeroBody: FC<HeroBodyProps> = ({ className = '', children }): JSX.Element => {
    return <figure className={`${styles.body} ${className}`}>{children}</figure>
}
export default HeroBody
