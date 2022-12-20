import React, { ReactNode } from 'react'
import NavBarBrand from './NavBarBrand'
import NavBarItems from './NavBarItems'
import styles from './NavBarStyles'

export type NavBarTypes = 'top' | 'bottom'
export interface NavBarProps {
    variant?: NavBarTypes
    className?: string
    children: ReactNode
}

const NavBar = ({
    variant = 'top',
    className = '',
    children,
}: NavBarProps): JSX.Element => {
    return (
        <div className={`${styles.container} ${styles[variant]} ${className}`}>
            {children}
        </div>
    )
}

NavBar.Brand = NavBarBrand
NavBar.Items = NavBarItems

export default NavBar