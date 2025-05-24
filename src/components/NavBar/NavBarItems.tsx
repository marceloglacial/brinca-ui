import { FC, ReactNode, useState, ComponentPropsWithoutRef, ReactElement } from 'react'
import { NavBarTypes } from './NavBar'
import NavBarButton from './NavBarButton'
import styles from './NavBarStyles'

export interface NavBarItemsProps {
    variant?: NavBarTypes

    children: ReactNode
}

const NavBarItems: FC<NavBarItemsProps & ComponentPropsWithoutRef<'div'>> = (
    props
): ReactElement => {
    const { variant = 'top', children } = props
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
                {...props}
                className={`${styles.items.container} ${(styles.items as any)[variant]} ${isOpenClassName} `}
                onClick={() => setIsOpen(false)}
            >
                {children}
            </div>
            {hasButton && <NavBarButton {...buttonProps} />}
        </>
    )
}

export default NavBarItems
