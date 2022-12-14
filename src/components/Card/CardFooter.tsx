import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardFooterProps {
    className?: string
    children: ReactNode
}

const CardFooter: FC<CardFooterProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <div className={`${styles.footer} ${className}`}>{children}</div>
}
export default CardFooter
