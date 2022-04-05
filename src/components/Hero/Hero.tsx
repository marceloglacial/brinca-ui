import React, { FC } from 'react'
import styles from './HeroStyles'

export interface HeroProps {
    className?: string
}

const Hero: FC<HeroProps> = ({ className = '', children }): JSX.Element => {
    return (
        <section className={`${styles.container} ${className}`}>
            {children}
        </section>
    )
}
export default Hero
