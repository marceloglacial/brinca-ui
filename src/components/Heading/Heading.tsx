import React, { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
    className?: string
}

export const Heading: FC<HeadingProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children, className = '' } = props
    return (
        <div {...props} className={`${styles.container} ${className}`}>
            {children}
        </div>
    )
}
