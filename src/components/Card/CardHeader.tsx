import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardHeaderProps {
    children: ReactNode
}

const CardHeader: FC<CardHeaderProps> = ({ children }): JSX.Element => {
    return <div className={styles.header}>{children}</div>
}
export default CardHeader
