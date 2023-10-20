import { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroImageProps {
    children: ReactNode
    shadow?: boolean
    rounded?: boolean
}

const HeroImage: FC<HeroImageProps> = ({ children, shadow, rounded }): JSX.Element => {
    const shadowStyles = shadow ? styles.shadow : ''
    const roundedStyles = rounded ? styles.rounded : ''

    return (
        <figure className={`${styles.figure} ${shadowStyles} ${roundedStyles} `}>{children}</figure>
    )
}
export default HeroImage
