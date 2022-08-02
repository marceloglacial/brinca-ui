import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroContentProps {
    className?: string
    children: ReactNode
}

const HeroContent: FC<HeroContentProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.content} ${className}`}>{children}</div>
}
export default HeroContent
