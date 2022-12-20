import React, { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
}

export const Heading: FC<HeadingProps & JSX.IntrinsicElements['div']> = ({
    children,
}): JSX.Element => {
    return <div className={`${styles.container}`}>{children}</div>
}
