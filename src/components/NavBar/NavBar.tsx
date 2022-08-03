import { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarProps {
    className?: string
    variant?: 'top' | 'footer'
    children: ReactNode
}

const NavBar: FC<NavBarProps> = ({
    className = '',
    variant = 'top',
    children,
}): JSX.Element => {
    return (
        <nav className={`${styles.container} ${styles[variant]} ${className}`}>
            {children}
        </nav>
    )
}

export default NavBar
