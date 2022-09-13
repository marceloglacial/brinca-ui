import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCardInfoProps {
    children: ReactNode
    className?: string
}

const BusinessCardInfo: FC<BusinessCardInfoProps> = ({
    children,
    className = '',
}) => {
    return <div className={`${styles.info} ${className}`}>{children}</div>
}
export default BusinessCardInfo
