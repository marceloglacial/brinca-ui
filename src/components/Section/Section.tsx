import React, { FC, ReactNode } from 'react'
import styles from './SectionStyles'

export interface SectionProps {
    children?: ReactNode
    className?: string
    spacing?: 's' | 'm' | 'l' | 'xl'
}

export const Section: FC<SectionProps & JSX.IntrinsicElements['section']> = (
    props
): JSX.Element => {
    const { children, className = '', spacing = 'm' } = props
    return (
        <section {...props} className={`${styles.container} ${styles[spacing]} ${className}`}>
            {children}
        </section>
    )
}
