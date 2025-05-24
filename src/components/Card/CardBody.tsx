import { FC, ReactNode, ComponentProps, ReactElement } from 'react'
import styles from './CardStyles'

export interface CardBodyProps {
    children: ReactNode
}

const CardBody: FC<CardBodyProps & ComponentProps<'div'>> = (props): ReactElement => {
    const { children } = props
    return (
        <div {...props} className={`${styles.body}`}>
            {children}
        </div>
    )
}
export default CardBody
