import React, { ReactNode } from 'react'
import NavBarBrand from './NavBarBrand'
import NavBarItems from './NavBarItems'
import styles from './NavBarStyles'

export interface NavBarProps {
    className?: string
    children: ReactNode
}

const NavBar = ({ className = '', children }: NavBarProps): JSX.Element => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}

NavBar.Brand = NavBarBrand
NavBar.Items = NavBarItems

export default NavBar
