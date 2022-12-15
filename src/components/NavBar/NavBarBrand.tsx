import React, { ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    className?: string
    children: ReactNode
}

const NavBarBrand = ({
    className = '',
    children,
}: NavBarBrandProps): JSX.Element => {
    return <div className={`${styles.brand} ${className}`}>{children}</div>
}

export default NavBarBrand
