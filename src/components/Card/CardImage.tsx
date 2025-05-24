import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './CardStyles'

export interface CardImageProps {
    children: ReactNode
}

const CardImage: FC<CardImageProps & ComponentPropsWithoutRef<'div'>> = (props): ReactElement => {
    const { children } = props
    return (
        <figure {...props} className={`${styles.figure}`}>
            {children}
        </figure>
    )
}
export default CardImage
