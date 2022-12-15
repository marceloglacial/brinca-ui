import React, { ReactNode, useState } from 'react'
import NavBarButton from './NavBarButton'
import styles from './NavBarStyles'

export interface NavBarItemsProps {
    className?: string
    children: ReactNode
}

const NavBarItems = ({
    className = '',
    children,
}: NavBarItemsProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const buttonProps = {
        isOpen,
        setIsOpen,
    }
    return (
        <>
            <div
                className={`${styles.items} ${
                    isOpen ? styles.isOpen : styles.isClose
                } ${className}`}
            >
                {children}
            </div>
            <NavBarButton {...buttonProps} />
        </>
    )
}

export default NavBarItems
