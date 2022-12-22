import React, { FC } from 'react'
import styles from './NavBarStyles'

export interface NavBarButtonProps {
    isOpen: boolean
    setIsOpen: (e: boolean) => void
}

const NavBarButton: FC<NavBarButtonProps> = ({
    isOpen,
    setIsOpen,
}): JSX.Element => {
    return (
        <div className={styles.buttonContainer}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <div className={styles.closeButton}>X</div>
                ) : (
                    <div className={styles.openButton}>
                        <svg
                            viewBox='0 0 100 80'
                            width='20'
                            height='20'
                            className='fill-green-600'
                        >
                            <rect width='100' height='15'></rect>
                            <rect y='30' width='100' height='15'></rect>
                            <rect y='60' width='100' height='15'></rect>
                        </svg>
                    </div>
                )}
            </button>
        </div>
    )
}

export default NavBarButton
