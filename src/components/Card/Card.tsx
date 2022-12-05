import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardProps {
    title: ReactNode
    description?: ReactNode
    image?: ReactNode
    footer?: ReactNode
    shadow?: boolean
    rounded?: boolean
    className?: string
}

const Card: FC<CardProps> = ({
    title,
    description,
    image,
    footer,
    shadow = true,
    rounded = true,
    className = '',
}): JSX.Element => {
    const shadowStyles = shadow ? styles.shadow : ''
    const roundedStyles = rounded ? styles.rounded : ''
    return (
        <div
            className={`${styles.card} ${shadowStyles} ${roundedStyles} ${className}`}
        >
            {image && <figure className={styles.figure}>{image}</figure>}
            <div className={styles.body}>
                <div className={styles.title}>{title}</div>
                {description && (
                    <div className={styles.description}>{description}</div>
                )}
            </div>
            {footer && <div className={styles.footer}>{footer}</div>}
        </div>
    )
}
export default Card
