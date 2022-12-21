import React, { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
    className?: string
}

export const Heading: FC<HeadingProps & JSX.IntrinsicElements['div']> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}
