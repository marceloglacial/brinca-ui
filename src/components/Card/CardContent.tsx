import React, { FC } from 'react'
import styles from './CardStyles'
const CardContent: FC = ({ children }): JSX.Element => {
    return <div className={styles.content}>{children}</div>
}
export default CardContent
