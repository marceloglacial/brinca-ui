import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    children: ReactNode
}

const NavBarBrand: FC<NavBarBrandProps & ComponentPropsWithoutRef<'div'>> = (
    props
): ReactElement => {
    const { children } = props
    return (
        <div {...props} className={`${styles.brand} `}>
            {children}
        </div>
    )
}

export default NavBarBrand
