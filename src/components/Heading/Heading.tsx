import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './HeadingStyles'

export interface HeadingProps {
    children?: ReactNode
}

export const Heading: FC<HeadingProps & ComponentPropsWithoutRef<'div'>> = (
    props
): ReactElement => {
    const { children } = props
    return (
        <div {...props} className={`${styles.container} `}>
            {children}
        </div>
    )
}
