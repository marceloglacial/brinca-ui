import React, { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    className?: string
    children: ReactNode
}

const NavBarBrand: FC<NavBarBrandProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <div className={`${styles.brand} ${className}`}>{children}</div>
}

export default NavBarBrand
