import { FC, ReactNode } from 'react'
import styles from './BusinessCardStyles'

export interface BusinessCarImageProps {
    className?: string
    children?: ReactNode
}

const BusinessCarImage: FC<BusinessCarImageProps> = ({
    className = '',
    children,
}) => {
    return <div className={`${styles.image} ${className}`}>{children}</div>
}
export default BusinessCarImage
