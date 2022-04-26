import { FC } from 'react'
import styles from './HeadingStyles'

const Heading: FC = ({ children }): JSX.Element => {
    return <div className={styles.container}>{children}</div>
}
export default Heading
