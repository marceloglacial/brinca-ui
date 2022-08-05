import { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children: ReactNode
}

const Heading: FC<HeadingProps> = ({ children }): JSX.Element => {
    return <div className={styles.container}>{children}</div>
}
export default Heading
