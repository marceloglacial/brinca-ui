import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardContentProps {
    children: ReactNode
}

const CardContent: FC<CardContentProps> = ({ children }): JSX.Element => {
    return <div className={styles.content}>{children}</div>
}
export default CardContent
