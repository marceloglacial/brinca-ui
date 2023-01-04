import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardBodyProps {
    className?: string
    children: ReactNode
}

const CardBody: FC<CardBodyProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <div {...props} className={`${styles.body} ${className}`}>
            {children}
        </div>
    )
}
export default CardBody
