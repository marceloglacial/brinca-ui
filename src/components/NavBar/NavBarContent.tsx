import { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarContentProps {
    className?: string
    children: ReactNode
}

const NavBarContent: FC<NavBarContentProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <div className={`${styles.content} ${className}`}>{children}</div>
}

export default NavBarContent
