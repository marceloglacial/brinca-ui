import { FC } from 'react'
import styles from './HeroStyles'

export interface HeroBodyProps {
    className?: string
}

const HeroBody: FC<HeroBodyProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.body} ${className}`}>{children}</div>
}
export default HeroBody
