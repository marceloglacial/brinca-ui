import { FC } from 'react'
import styles from './NavItemStyles'

export interface NavItemProps {
    text: string
    link: string
    target?: string
    className?: string
    menu?: NavItemProps[]
}
const NavItem: FC<NavItemProps> = ({
    className = '',
    link,
    target,
    text,
    menu,
}): JSX.Element => {
    return (
        <li className={`${styles.container} ${className}`}>
            <a href={link} target={target}>
                {text}
            </a>
            {menu && (
                <ul className={styles.menu}>
                    {menu.map((item, index) => (
                        <NavItem key={index} {...item} />
                    ))}
                </ul>
            )}
        </li>
    )
}

export default NavItem
