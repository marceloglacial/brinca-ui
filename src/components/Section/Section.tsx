import React, { FC, ReactNode } from 'react'
import styles from './SectionStyles'

export interface SectionProps {
    children?: ReactNode
    className?: string
    spacing?: 's' | 'm' | 'l' | 'xl'
}

export const Section: FC<SectionProps> = ({
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
