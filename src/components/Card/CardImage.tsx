import Image, { ImageProps } from '@components/Image/Image'
import React, { FC } from 'react'
import styles from './CardStyles'

const CardImage: FC<ImageProps> = ({
    src,
    alt = '',
    width = '200',
    height = '200',
    className = '',
}): JSX.Element => {
    return (
        <figure className={styles.figure}>
            <Image
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
