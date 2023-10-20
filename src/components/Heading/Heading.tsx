import { FC, ReactNode } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
}

export const Heading: FC<HeadingProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children } = props
    return (
        <div {...props} className={`${styles.container} `}>
            {children}
        </div>
    )
}
