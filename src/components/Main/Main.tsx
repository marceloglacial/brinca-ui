import React, { FC, ReactNode } from 'react'
import styles from './MainStyles'

export interface MainProps {
    children?: ReactNode
    className?: string
    spacing?: 's' | 'm' | 'l' | 'xl'
}

const Main: FC<MainProps> = ({
    children,
    className = '',
    spacing = 'm',
}): JSX.Element => {
    return (
        <main className={`${styles.container} ${styles[spacing]} ${className}`}>
            {children}
        </main>
    )
}
export default Main
