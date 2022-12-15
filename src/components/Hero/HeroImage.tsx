import React, { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroImageProps {
    className?: string
    children: ReactNode
    noShadow?: boolean
    squared?: boolean
}

const HeroImage: FC<HeroImageProps> = ({
    className = '',
    children,
    noShadow,
    squared,
}): JSX.Element => {
    const shadowStyles = noShadow ? '' : styles.shadow
    const roundedStyles = squared ? '' : styles.rounded

    return (
        <figure
            className={`${styles.figure} ${shadowStyles} ${roundedStyles} ${className}`}
        >
            {children}
        </figure>
    )
}
export default HeroImage
