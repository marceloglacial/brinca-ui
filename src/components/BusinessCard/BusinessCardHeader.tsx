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
    return <h3 className={`${styles.header} ${className}`}>{children}</h3>
}
export default BusinessCardHeader
