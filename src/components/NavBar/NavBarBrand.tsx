import { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarBrandProps {
    className?: string
    children: ReactNode
}

const NavBarBrand: FC<NavBarBrandProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <div {...props} className={`${styles.brand} ${className}`}>
            {children}
        </div>
    )
}

export default NavBarBrand
