import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroHeaderProps {
    className?: string
    children: ReactNode
}

const HeroHeader: FC<HeroHeaderProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <h2 className={`${styles.header} ${className}`}>{children}</h2>
}
export default HeroHeader
