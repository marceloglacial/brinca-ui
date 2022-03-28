import React, { FC } from 'react'
import styles from './CardStyles'
const Card: FC = ({ children }): JSX.Element => {
    return <div className={styles.container}>{children}</div>
}
export default Card
