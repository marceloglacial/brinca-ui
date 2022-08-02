import React, { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroProps {
    className?: string
    variant?: 'base' | 'reversed'
    children: ReactNode
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
