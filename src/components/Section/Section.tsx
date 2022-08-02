import { FC, ReactNode } from 'react'
import styles from './SectionStyles'

export interface SectionProps {
    className?: string
    children: ReactNode
}

const Section: FC<SectionProps> = ({
    children,
    className = '',
}): JSX.Element => {
    return (
        <section className={`${styles.container} ${className}`}>
            {children}
        </section>
    )
}
export default Section
