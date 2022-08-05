import { FC } from 'react'
import styles from './HeroStyles'

export interface HeroContentProps {
    className?: string
}

const HeroContent: FC<HeroContentProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.content} ${className}`}>{children}</div>
}
export default HeroContent
