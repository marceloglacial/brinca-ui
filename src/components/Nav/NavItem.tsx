import { FC, ReactNode } from 'react'
import styles from './NavStyles'
export interface NavItemProps {
    className?: string
    accent?: boolean
    children: ReactNode
}
const NavItem: FC<NavItemProps> = ({
    className = '',
    children,
    accent,
}): JSX.Element => {
    const itemClassName = accent ? styles.itemAccent : styles.item
    return (
        <div className={`nav__item ${itemClassName} ${className}`}>
            {children}
        </div>
    )
}

export default NavItem
