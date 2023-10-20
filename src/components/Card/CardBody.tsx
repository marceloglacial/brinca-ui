import { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardBodyProps {
    children: ReactNode
}

const CardBody: FC<CardBodyProps & JSX.IntrinsicElements['div']> = (props): JSX.Element => {
    const { children } = props
    return (
        <div {...props} className={`${styles.body}`}>
            {children}
        </div>
    )
}
export default CardBody
