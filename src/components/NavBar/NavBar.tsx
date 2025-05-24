import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import NavBarBrand from './NavBarBrand'
import NavBarItems from './NavBarItems'
import styles from './NavBarStyles'

export type NavBarTypes = 'top' | 'bottom'
export interface NavBarProps {
    variant?: NavBarTypes

    children: ReactNode
}

const NavBarContainer: FC<NavBarProps & ComponentPropsWithoutRef<'nav'>> = (
    props
): ReactElement => {
    const { variant = 'top', children } = props
    return (
        <nav {...props} className={`${styles.container} ${(styles as any)[variant]} `}>
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
