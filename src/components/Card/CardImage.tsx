import React, { FC } from 'react'
import styles from './CardStyles'

export interface CardImageProps {
    src: string
    alt?: string
    width?: number
    height?: number
    className?: string
}

const CardImage: FC<CardImageProps> = ({
    src,
    alt = '',
    width = 200,
    height = 200,
    className = '',
}): JSX.Element => {
    return (
        <figure className={styles.figure}>
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={`${styles.image} ${className}`}
            />
        </figure>
    )
}
export default CardImage
