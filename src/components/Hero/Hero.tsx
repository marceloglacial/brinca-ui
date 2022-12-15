import React, { ReactNode } from 'react'
import HeroBody from './HeroBody'
import HeroImage from './HeroImage'
import styles from './HeroStyles'

export interface HeroProps {
    className?: string
    children: ReactNode
    reversed?: boolean
}

const Hero = ({
    className = '',
    children,
    reversed,
}: HeroProps): JSX.Element => {
    const isReversedClassName = reversed ? styles.reversed : ''
    return (
        <div className={`${styles.hero} ${isReversedClassName} ${className}`}>
            {children}
        </div>
    )
}

Hero.Image = HeroImage
Hero.Body = HeroBody

export default Hero
