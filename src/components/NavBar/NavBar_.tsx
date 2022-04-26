import { FC } from 'react'
import styles from './NavBarStyles'

export interface NavBarProps {
    className?: string
}

const NavBar: FC<NavBarProps> = ({ className = '', children }): JSX.Element => {
    return <nav className={`${styles.container} ${className}`}>{children}</nav>
}

export default NavBar
