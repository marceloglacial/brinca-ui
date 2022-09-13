import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCardHeaderProps {
    className?: string
    children?: ReactNode
}

const BusinessCardHeader: FC<BusinessCardHeaderProps> = ({
    className,
    children,
}) => {
    return <div className={`${styles.header} ${className}`}>{children}</div>
}
export default BusinessCardHeader
