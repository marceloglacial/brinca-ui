import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCarContentProps {
    className?: string
    children?: ReactNode
}

const BusinessCarContent: FC<BusinessCarContentProps> = ({
    className = '',
    children,
}) => {
    return <div className={`${styles.content} ${className}`}>{children}</div>
}
export default BusinessCarContent
