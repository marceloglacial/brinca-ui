import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardBodyProps {
    children: ReactNode
}

const CardBody: FC<CardBodyProps> = ({ children }): JSX.Element => {
    return <div className={styles.body}>{children}</div>
}
export default CardBody
