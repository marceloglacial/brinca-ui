import { FC } from 'react'
import styles from './HeroStyles'

export interface HeroHeaderProps {
    className?: string
}

const HeroHeader: FC<HeroHeaderProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <h3 className={`${styles.header} ${className}`}>{children}</h3>
}
export default HeroHeader
