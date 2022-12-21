import React, { FC, ReactNode } from 'react'
import HeroBody from './HeroBody'
import HeroImage from './HeroImage'
import styles from './HeroStyles'

export interface HeroProps {
    className?: string
    children: ReactNode
    reversed?: boolean
}

const HeroContainer: FC<HeroProps> = ({
    className = '',
    children,
    reversed,
}): JSX.Element => {
    const isReversedClassName = reversed ? styles.reversed : ''
    return (
        <div className={`${styles.hero} ${isReversedClassName} ${className}`}>
            {children}
        </div>
    )
}

export const Hero = Object.assign(HeroContainer, {
    Image: HeroImage,
    Body: HeroBody,
})

HeroContainer.displayName = 'Hero'
HeroImage.displayName = 'Hero.Image'
HeroBody.displayName = 'Hero.Body'
