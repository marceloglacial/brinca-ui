import React, { FC, ReactNode } from 'react'
import styles from './HeroStyles'

export interface HeroProps {
    title: ReactNode
    description?: ReactNode
    image: ReactNode
    footer?: ReactNode
    shadow?: boolean
    rounded?: boolean
    reversed?: boolean
    className?: string
}

const Hero: FC<HeroProps> = ({
    title,
    description,
    image,
    footer,
    shadow = true,
    rounded = true,
    reversed,
    className = '',
}): JSX.Element => {
    const shadowStyles = shadow ? styles.shadow : ''
    const roundedStyles = rounded ? styles.rounded : ''
    const reverSedStyles = reversed ? styles.reversed : ''
    return (
        <div className={`${styles.hero} ${reverSedStyles}`}>
            {image && (
                <figure
                    className={`${styles.figure} ${shadowStyles} ${roundedStyles} ${className}`}
                >
                    {image}
                </figure>
            )}
            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                {description && (
                    <div className={styles.description}>{description}</div>
                )}
                {footer && <div className={styles.footer}>{footer}</div>}
            </div>
        </div>
    )
}
export default Hero
