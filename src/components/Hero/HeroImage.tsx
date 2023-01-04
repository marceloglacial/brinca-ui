import React, { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroImageProps {
    className?: string
    children: ReactNode
    shadow?: boolean
    rounded?: boolean
}

const HeroImage: FC<HeroImageProps> = ({
    className = '',
    children,
    shadow,
    rounded,
}): JSX.Element => {
    const shadowStyles = shadow ? styles.shadow : ''
    const roundedStyles = rounded ? styles.rounded : ''

    return (
        <figure className={`${styles.figure} ${shadowStyles} ${roundedStyles} ${className}`}>
            {children}
        </figure>
    )
}
export default HeroImage
