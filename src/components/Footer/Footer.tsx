import { FC } from 'react'
import styles from './FooterStyles'

export interface FooterProps {
    className?: string
}

const Footer: FC<FooterProps> = ({ className = '', children }): JSX.Element => {
    return (
        <footer className={`${styles.container} ${className}`}>
            {children}
        </footer>
    )
}
export default Footer
