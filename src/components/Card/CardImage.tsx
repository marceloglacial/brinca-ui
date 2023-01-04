import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardImageProps {
    className?: string
    children: ReactNode
}

const CardImage: FC<CardImageProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <figure {...props} className={`${styles.figure} ${className}`}>
            {children}
        </figure>
    )
}
export default CardImage
