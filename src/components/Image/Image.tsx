import React, { FC } from 'react'
import styles from './ImageStyles'

export interface ImageProps {
    src: string
    alt?: string
    width?: string
    height?: string
    shadow?: boolean | ''
    rounded?: boolean | ''
    className?: string
    onClick?: (e: unknown) => void
}

const Image: FC<ImageProps> = ({
    src,
    alt = '',
    height = 'auto',
    width = '100%',
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
            className={`image ${rounded && styles.rounded} ${
                shadow && styles.shadow
            } ${className}`}
            onClick={onClick}
        />
    )
}
export default Image
