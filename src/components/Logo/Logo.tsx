import { FC } from 'react'
import styles from './LogoStyles'

export interface LogoProps {
    variant?: 'color' | 'white'
    size?: 'xs' | 'md' | 'lg'
}

const Logo: FC<LogoProps> = ({
    variant = 'color',
    size = 'md',
}): JSX.Element => {
    const imageVariant = {
        color: 'https://res.cloudinary.com/brinca/image/upload/v1664060764/image_qcfpyy.png',
        white: 'https://res.cloudinary.com/brinca/image/upload/v1664060777/image_yfpt9t.png',
    }

    return (
        <div
            className={`logo logo--${variant} ${styles.container} ${styles.sizes[size]}`}
        >
            <img
                src={imageVariant[variant]}
                alt='Brinca Logo'
                className={styles.image}
            />
        </div>
    )
}
export default Logo
