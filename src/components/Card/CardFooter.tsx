import { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardFooterProps {
    children: ReactNode
}

const CardFooter: FC<CardFooterProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children } = props
    return (
        <div {...props} className={`${styles.footer}`}>
            {children}
        </div>
    )
}
export default CardFooter
