import { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    children: ReactNode
}

const NavBarBrand: FC<NavBarBrandProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children } = props
    return (
        <div {...props} className={`${styles.brand} `}>
            {children}
        </div>
    )
}

export default NavBarBrand
