import React, { FC } from 'react'
import styles from './CardStyles'

export interface CardProps {
    noShadow?: boolean
}

const Card: FC<CardProps> = ({ children, noShadow = false }): JSX.Element => {
    const shadowClassName = noShadow ? styles.noShadow : ``
    return (
        <div className={`${styles.container} ${shadowClassName}`}>
            {children}
        </div>
    )
}
export default Card
