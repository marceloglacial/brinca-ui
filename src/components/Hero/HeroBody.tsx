import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroBodyProps {
    className?: string
    children: ReactNode
}

const HeroBody: FC<HeroBodyProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.body} ${className}`}>{children}</div>
}
export default HeroBody
