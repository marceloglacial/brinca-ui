import { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardImageProps {
    children: ReactNode
}

const CardImage: FC<CardImageProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children } = props
    return (
        <figure {...props} className={`${styles.figure}`}>
            {children}
        </figure>
    )
}
export default CardImage
