import React, { FC } from 'react'
import styles from './ImageStyles'

export interface ImageProps {
    src: 'string'
    alt?: 'string'
    width?: number
    height?: number
    shadow?: boolean | ''
    rounded?: boolean | ''
    className?: string
    onClick?: (e: unknown) => void
}

const Image: FC<ImageProps> = ({
    src,
    alt = '',
    height,
    width,
    shadow = '',
    rounded = '',
    className = '',
    onClick,
}): JSX.Element => {
    return (
        <img
            src={src}
            alt={alt}
            height={height}
            width={width}
            className={`${rounded && styles.rounded} ${
                shadow && styles.shadow
            } ${className}`}
            onClick={onClick}
        />
    )
}
export default Image
