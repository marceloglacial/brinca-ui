import { FC, ReactNode } from 'react'
import styles from './SectionStyles'

export interface SectionProps {
    children?: ReactNode
    spacing?: 's' | 'm' | 'l' | 'xl'
}

export const Section: FC<SectionProps & JSX.IntrinsicElements['section']> = (
    props
): JSX.Element => {
    const { children, spacing = 'm' } = props
    return (
        <section {...props} className={`${styles.container} ${styles[spacing]} `}>
            {children}
        </section>
    )
}
