import { FC } from 'react'
import styles from './NavBarStyles'

export interface NavBarContentProps {
    className?: string
}

const NavBarContent: FC<NavBarContentProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <nav className={`${styles.content} ${className}`}>{children}</nav>
}

export default NavBarContent
