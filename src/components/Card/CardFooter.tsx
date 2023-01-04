import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardFooterProps {
    className?: string
    children: ReactNode
}

const CardFooter: FC<CardFooterProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <div {...props} className={`${styles.footer} ${className}`}>
            {children}
        </div>
    )
}
export default CardFooter
