import React, { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
    className?: string
}

const Heading: FC<HeadingProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}
export default Heading
