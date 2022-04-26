import { FC } from 'react'
import styles from './NavStyles'

export interface NavProps {
    className?: string
}

const Nav: FC<NavProps> = ({ className = '', children }): JSX.Element => {
    return (
        <nav className={`nav ${styles.container} ${className}`}>{children}</nav>
    )
}
export default Nav
