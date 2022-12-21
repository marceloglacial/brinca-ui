import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardBodyProps
    extends React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    className?: string
    children: ReactNode
}

const CardBody: FC<CardBodyProps> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <div {...props} className={`${styles.body} ${className}`}>
            {children}
        </div>
    )
}
export default CardBody
