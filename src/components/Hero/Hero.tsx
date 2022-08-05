import React, { FC } from 'react'
import styles from './HeroStyles'

export interface HeroProps {
    className?: string
    variant?: 'base' | 'reversed'
}

const Hero: FC<HeroProps> = ({
    variant = 'base',
    className = '',
    children,
}): JSX.Element => {
    return (
        <section
            className={`${styles.container} ${styles[variant]} ${className}`}
        >
            {children}
        </section>
    )
}
export default Hero
