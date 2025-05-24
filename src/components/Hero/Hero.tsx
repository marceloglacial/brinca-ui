import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import HeroBody from './HeroBody'
import HeroImage from './HeroImage'
import styles from './HeroStyles'

export interface HeroProps {
    children: ReactNode
    reversed?: boolean
}

const HeroContainer: FC<HeroProps & ComponentPropsWithoutRef<'div'>> = (props): ReactElement => {
    const { children, reversed } = props
    const isReversedClassName = reversed ? styles.reversed : ''
    return (
        <div {...props} className={`${styles.hero} ${isReversedClassName} `}>
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
