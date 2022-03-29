import React, { FC } from 'react'
import styles from './CardStyles'
const CardHeader: FC = ({ children }): JSX.Element => {
    return <div className={styles.header}>{children}</div>
}
export default CardHeader
