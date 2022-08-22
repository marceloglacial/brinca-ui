import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardProps {
    noShadow?: boolean
    children: ReactNode
}

const Card: FC<CardProps> = ({ children, noShadow = false }): JSX.Element => {
    const shadowClassName = noShadow ? styles.noShadow : styles.shadow
    return (
        <div className={`${styles.container} ${shadowClassName}`}>
            {children}
        </div>
    )
}
export default Card
