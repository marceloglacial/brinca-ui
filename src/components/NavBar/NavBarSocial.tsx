import { FC, ReactNode } from 'react'
import styles from './NavBarStyles'

export interface NavBarSocialProps {
    className?: string
    children: ReactNode
}

const NavBarSocial: FC<NavBarSocialProps> = ({
    className = '',
    children,
}): JSX.Element => {
    return <div className={`${styles.social} ${className}`}>{children}</div>
}

export default NavBarSocial
