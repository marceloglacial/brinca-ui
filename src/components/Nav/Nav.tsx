import { FC } from 'react'
import styles from './NavStyles'

export interface NavProps {
    className?: string
}

const Nav: FC<NavProps> = ({ className = '', children }): JSX.Element => {
    return (
        <div className={`nav ${styles.container} ${className}`}>{children}</div>
    )
}
export default Nav
