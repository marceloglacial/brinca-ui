import React, { ReactNode, useState } from 'react'
import { NavBarTypes } from './NavBar'
import NavBarButton from './NavBarButton'
import styles from './NavBarStyles'

export interface NavBarItemsProps {
    variant?: NavBarTypes
    className?: string
    children: ReactNode
}

const NavBarItems = ({
    variant = 'top',
    className = '',
    children,
}: NavBarItemsProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const hasButton = variant === 'top'
    const isOpenClassName = isOpen ? styles.isOpen : styles.isClose
    const buttonProps = {
        isOpen,
        setIsOpen,
    }
    return (
        <>
            <div
                className={`${styles.items.container} ${styles.items[variant]} ${isOpenClassName} ${className}`}
            >
                {children}
            </div>
            {hasButton && <NavBarButton {...buttonProps} />}
        </>
    )
}

export default NavBarItems
