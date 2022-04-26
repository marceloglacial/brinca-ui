import { FC } from 'react'
import NavItem, { NavItemProps } from './NavItem'
import styles from './NavStyles'

export interface NavProps {
    menu: NavItemProps[]
    className?: string
    variant?: NavVariant
}

export type NavVariant = 'top' | 'bottom'

const Nav: FC<NavProps> = ({
    menu,
    className = '',
    variant = 'top',
}): JSX.Element => {
    return (
        <div className={`nav ${`nav--${variant}`} ${className}`}>
            <ul className={`nav__list ${styles.container}`}>
                {menu.map((item, index) => {
                    return <NavItem key={index} variant={variant} {...item} />
                })}
            </ul>
        </div>
    )
}
export default Nav
