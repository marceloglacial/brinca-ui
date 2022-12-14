import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardImageProps {
    className?: string
    children: ReactNode
}

const CardImage: FC<CardImageProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return (
        <figure className={`${styles.figure} ${className}`}>{children}</figure>
    )
}
export default CardImage
