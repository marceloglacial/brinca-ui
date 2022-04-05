import Image, { ImageProps } from '@components/Image/Image'
import { FC } from 'react'
import styles from './HeroStyles'

export interface HeroImageProps {
    className?: string
    image: ImageProps
}

const HeroImage: FC<HeroImageProps> = ({
    image,
    className = '',
}): JSX.Element => {
    return (
        <figure className={`${styles.image} ${className}`}>
            <Image {...image} />
        </figure>
    )
}
export default HeroImage
