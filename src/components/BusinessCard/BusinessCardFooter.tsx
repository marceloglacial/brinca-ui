import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCarFooterProps {
    className?: string
    children?: ReactNode
}

const BusinessCarFooter: FC<BusinessCarFooterProps> = ({
    className = '',
    children,
}) => {
    return <h3 className={`${styles.footer} ${className}`}>{children}</h3>
}
export default BusinessCarFooter
