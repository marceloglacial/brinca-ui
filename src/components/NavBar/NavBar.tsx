import { FC, ReactNode } from 'react'
import NavBarBrand from './NavBarBrand'
import NavBarItems from './NavBarItems'
import styles from './NavBarStyles'

export type NavBarTypes = 'top' | 'bottom'
export interface NavBarProps {
    variant?: NavBarTypes
    className?: string
    children: ReactNode
}

const NavBarContainer: FC<NavBarProps & JSX.IntrinsicElements['nav']> = (props): JSX.Element => {
    const { variant = 'top', className = '', children } = props
    return (
        <nav {...props} className={`${styles.container} ${styles[variant]} ${className}`}>
            {children}
        </nav>
    )
}

export const NavBar = Object.assign(NavBarContainer, {
    Brand: NavBarBrand,
    Items: NavBarItems,
})

NavBarContainer.displayName = 'NavBar'
NavBarBrand.displayName = 'NavBar.Brand'
NavBarItems.displayName = 'NavBar.Items'
