import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardBodyProps {
    className?: string
    children: ReactNode
}

const CardBody: FC<CardBodyProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <div className={`${styles.body} ${className}`}>{children}</div>
}
export default CardBody
