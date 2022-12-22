import React, { FC, ReactNode } from 'react'
import styles from './CardStyles'

export interface CardFooterProps
    extends React.DetailedHTMLProps<
        React.HtmlHTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    > {
    className?: string
    children: ReactNode
}

const CardFooter: FC<CardFooterProps> = (props): JSX.Element => {
    const { className = '', children } = props
    return (
        <div {...props} className={`${styles.footer} ${className}`}>
            {children}
        </div>
    )
}
export default CardFooter
