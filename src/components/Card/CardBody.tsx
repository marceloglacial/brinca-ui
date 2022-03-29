import React, { FC } from 'react'
import styles from './CardStyles'
const CardBody: FC = ({ children }): JSX.Element => {
    return <div className={styles.body}>{children}</div>
}
export default CardBody
