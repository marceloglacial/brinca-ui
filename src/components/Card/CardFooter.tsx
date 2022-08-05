import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardFooterProps {
    children: ReactNode
}

const CardFooter: FC<CardFooterProps> = ({ children }): JSX.Element => {
    return <div className={styles.footer}>{children}</div>
}
export default CardFooter
