import { FC, ReactNode } from 'react'
import styles from './NavStyles'

export interface NavProps {
    className?: string
    children: ReactNode
}

const Nav: FC<NavProps> = ({ className = '', children }): JSX.Element => {
    return (
        <nav className={`nav ${styles.container} ${className}`}>{children}</nav>
    )
}
export default Nav
