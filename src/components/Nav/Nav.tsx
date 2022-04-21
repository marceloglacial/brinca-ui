import { FC } from 'react'
import NavItem, { NavItemProps } from './NavItem'
import styles from './NavStyles'

export interface NavProps {
    menu: NavItemProps[]
    className?: string
    variant?: 'top' | 'bottom'
}

const Nav: FC<NavProps> = ({
    menu,
    className = '',
    variant = 'top',
}): JSX.Element => {
    return (
        <nav className={`nav ${styles[variant]} ${className}`}>
            <ul className={`nav__list ${styles.container}`}>
                {menu.map((item, index) => {
                    return <NavItem key={index} {...item} />
                })}
            </ul>
        </nav>
    )
}
export default Nav
