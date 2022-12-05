import React, { FC, ReactNode } from 'react'
import styles from './MainStyles'

export interface MainProps {
    children?: ReactNode
    className?: string
}

const Main: FC<MainProps> = ({ children, className = '' }): JSX.Element => {
    return (
        <main className={`${styles.container} ${className}`}>{children}</main>
    )
}
export default Main
