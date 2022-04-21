import { FC } from 'react'
import NavItem, { NavItemProps } from './NavItem'

export interface NavProps {
    menu: NavItemProps[]
    className?: string
}

const Nav: FC<NavProps> = ({ menu, className = '' }): JSX.Element => {
    return (
        <nav className={`nav ${className}`}>
            <ul className={`nav__list ${styles.container}`}>
                {menu.map((item, index) => {
                    return <NavItem key={index} {...item} />
                })}
            </ul>
        </nav>
    )
}
export default Nav

export interface stylesProps {
    [index: string]: string
}
const styles: stylesProps = {
    container: `flex items-center gap-12`,
}
