import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCardProps {
    className?: string
    children?: ReactNode
}

const BusinessCard: FC<BusinessCardProps> = ({ className, children }) => {
    return <div className={`${styles.container} ${className}`}>{children}</div>
}
export default BusinessCard
