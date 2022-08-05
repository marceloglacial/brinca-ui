import React, { FC } from 'react'
import styles from './CardStyles'
const CardFooter: FC = ({ children }): JSX.Element => {
    return <div className={styles.footer}>{children}</div>
}
export default CardFooter
