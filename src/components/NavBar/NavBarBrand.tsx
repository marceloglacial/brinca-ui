import { FC } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    className?: string
}

const NavBarBrand: FC<NavBarBrandProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <nav className={`${styles.brand} ${className}`}>{children}</nav>
}

export default NavBarBrand
