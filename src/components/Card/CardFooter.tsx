import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './CardStyles'

export interface CardFooterProps {
    children: ReactNode
}

const CardFooter: FC<CardFooterProps & ComponentPropsWithoutRef<'div'>> = (props): ReactElement => {
    const { children } = props
    return (
        <div {...props} className={`${styles.footer}`}>
            {children}
        </div>
    )
}
export default CardFooter
