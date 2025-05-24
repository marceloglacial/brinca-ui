import { FC, ReactNode, ComponentPropsWithoutRef, ReactElement } from 'react'
import styles from './SectionStyles'

export interface SectionProps {
    children?: ReactNode
    spacing?: 's' | 'm' | 'l' | 'xl'
}

export const Section: FC<SectionProps & ComponentPropsWithoutRef<'section'>> = (
    props
): ReactElement => {
    const { children, spacing = 'm' } = props
    return (
        <section {...props} className={`${styles.container} ${(styles as any)[spacing]} `}>
            {children}
        </section>
    )
}
